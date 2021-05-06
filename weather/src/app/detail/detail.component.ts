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

  title: string = MyStrings.details_title;
  windTitle: string = MyStrings.details_wind;
  windUnit: string = '--';
  humidityTitle: string = MyStrings.details_humidity;
  dewTitle: string = MyStrings.details_dew;
  pressureTitle: string = MyStrings.details_pressure;
  pressureUnit: string = 'MB';
  uvTitle: string = MyStrings.details_uv;
  uvStatus1: string = UVStatus.low;
  uvStatus2: string = UVStatus.mid;
  uvStatus3: string = UVStatus.high;
  uvStatus4: string = UVStatus.vhigh;
  sunriseTitle: string = MyStrings.details_sunrise;
  sunsetTitle: string = MyStrings.details_sunset;

  constructor() {}

  ngOnInit(): void {
    if (
      localStorage.getItem(MyStorage.unit) &&
      localStorage.getItem(MyStorage.unit) === MyUnits.imperial
    ) {
      this.windUnit = 'MPH';
      //this.pressureUnit = 'Pa';
    } else {
      this.windUnit = 'KM/H';
      //this.pressureUnit = 'MB';
    }
  }
}
