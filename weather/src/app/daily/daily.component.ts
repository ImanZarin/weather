import { Component, Input, OnInit } from '@angular/core';
import { dayWeather } from '../shared/api.models';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  @Input()
  days?: dayWeather[];
  @Input()
  time?: number;
  @Input()
  timeOffset?: number;

  title: string;

  constructor() {
    this.title = MyStrings.daily_title;
  }

  ngOnInit(): void {
  }
}
