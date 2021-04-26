import { HttpResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
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
  constructor(private api: ApiService, private router: Router) {}

  @Output() onChange = new EventEmitter<searchResults>();
  @Output() onSettingChange = new EventEmitter<boolean>();

  isMetric: boolean = true;

  ngOnInit(): void {
    if (
      localStorage.getItem(MyStorage.unit) &&
      localStorage.getItem(MyStorage.unit) == MyUnits.imperial
    )
      this.isMetric = false;
  }

  searchCity(cityInput: Event) {
    this.api
      .search((<HTMLInputElement>cityInput.target).value)
      .subscribe((resp) => {
        console.log(resp);
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

  changeSetting(isMetricInput: Event) {
    this.onSettingChange.emit((<HTMLInputElement>isMetricInput.target).checked);
  }
}
