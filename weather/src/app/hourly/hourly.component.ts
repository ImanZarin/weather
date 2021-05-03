import { Component, Input, OnInit } from '@angular/core';
import { hourWeather } from '../shared/api.models';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss'],
})
export class HourlyComponent implements OnInit {
  @Input()
  hours?: hourWeather[];
  @Input()
  time?: number;
  @Input()
  timeOffset?: number;

  title: string;

  constructor() {
    this.title = MyStrings.hourly_title;
  }

  ngOnInit(): void {
  }
}
