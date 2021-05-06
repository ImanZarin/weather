import { Component, Input, OnInit } from '@angular/core';
import { DayWeather } from '../shared/api.models';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  @Input()
  days?: DayWeather[];
  @Input()
  time?: number;
  @Input()
  timeOffset?: number;

  title: string = MyStrings.daily_title;

  constructor() {}

  ngOnInit(): void {}
}
