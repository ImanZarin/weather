import { Component, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { MyRoute, MyStorage, MyUnits } from '../shared/enums';
import { changeSetting } from '../shared/functions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMetric: boolean = true;
  inputCity: string;
  loading: boolean = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.inputCity = '';
  }

  ngOnInit(): void {
    if (
      localStorage.getItem(MyStorage.unit) &&
      localStorage.getItem(MyStorage.unit) == MyUnits.imperial
    )
      this.isMetric = false;
  }

  searchCity() {
    if (this.inputCity.length < 1)
      this.snackBar.open(MyStrings.header_empty_input_error);
    else
      this.router.navigate([MyRoute.search], {
        queryParams: {
          search: this.inputCity,
        },
      });
  }

  changeSetting(isMetricInput: MatSlideToggleChange) {
    changeSetting(isMetricInput.checked, this.router);
  }
}
