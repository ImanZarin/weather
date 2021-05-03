import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input()
  chanceOfRain!: number;
  @Input()
  time?: number;
  @Input()
  timeOffset?: number;
   @Input()
  image!: string;
  @Input()
  temp!: number;
  @Input()
  tempMin!: number;
  @Input()
  tempMax!: number;
  @Input()
  type!: string;

  timeUTC: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    if (this.timeOffset && this.time) this.timeUTC = this.timeOffset + this.time;
  }
}
