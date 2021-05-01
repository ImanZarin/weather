import { HttpResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { searchResults } from '../shared/api.models';
import { ApiService } from '../shared/api.service';
import { MyStorage, MyUnits } from '../shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onChange = new EventEmitter<searchResults>();
  @Output() onSettingChange = new EventEmitter<boolean>();

  isMetric: boolean = true;
  inputCity: string;
  loading: boolean = false;

  constructor(private api: ApiService, private router: Router) {
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
    if (this.loading) return;
    this.loading = true;
    this.api.search(this.inputCity).subscribe((resp) => {
      this.onChange.emit(resp);
      if (resp.count === 1)
        this.router.navigate(['/weather'], {
          queryParams: {
            lat: resp.list[0].coord.lat,
            lon: resp.list[0].coord.lon,
          },
        });
    });
  }

  changeSetting(isMetricInput: MatSlideToggleChange) {
    this.onSettingChange.emit(isMetricInput.checked);
  }
}
