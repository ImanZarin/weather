import { Component, Input, OnInit } from '@angular/core';
import { MyStrings } from '../shared/constants';
import { MyStorage, MyUnits, UVStatus } from '../shared/enums';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input()
  wind?: number;
  @Input()
  humidity?: number;
  @Input()
  dew?: number;
  @Input()
  pressure?: number;
  @Input()
  uv?: number;
  @Input()
  sunrise?: number;
  @Input()
  sunset?: number;
  @Input()
  timeOffset?: number = 0;

  title: string;
  windTitle: string;
  windUnit: string;
  humidityTitle: string;
  dewTitle: string;
  pressureTitle: string;
  pressureUnit: string;
  uvTitle: string;
  uvStatus1: string;
  uvStatus2: string;
  uvStatus3: string;
  uvStatus4: string;
  sunriseTitle: string;
  sunsetTitle: string;

  constructor() {
    this.title = MyStrings.details_title;
    this.windTitle = MyStrings.details_wind;
    this.humidityTitle = MyStrings.details_humidity;
    this.dewTitle = MyStrings.details_dew;
    this.pressureTitle = MyStrings.details_pressure;
    this.uvTitle = MyStrings.details_uv;
    this.sunriseTitle = MyStrings.details_sunrise;
    this.sunsetTitle = MyStrings.details_sunset;
    this.uvStatus1 = UVStatus.low;
    this.uvStatus2 = UVStatus.mid;
    this.uvStatus3 = UVStatus.high;
    this.uvStatus4 = UVStatus.vhigh;
    if (
      localStorage.getItem(MyStorage.unit) &&
      localStorage.getItem(MyStorage.unit) === MyUnits.imperial
    ) {
      this.windUnit = 'MPH';
      this.pressureUnit = 'Pa';
    } else {
      this.windUnit = 'KM/H';
      this.pressureUnit = 'MB';
    }
  }

  ngOnInit(): void {
  }
}
