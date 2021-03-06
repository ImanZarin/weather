import { Component, Input, OnInit } from '@angular/core';
import { HourWeather } from '../shared/api.models';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss'],
})
export class HourlyComponent implements OnInit {
  @Input()
  hours?: HourWeather[];
  @Input()
  time?: number;
  @Input()
  timeOffset?: number;

  title: string = MyStrings.hourly_title;

  constructor() {}

  ngOnInit(): void {}
}
