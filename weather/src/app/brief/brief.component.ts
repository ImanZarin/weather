import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../shared/api.models';
import { MyStrings } from '../shared/constants';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
})
export class BriefComponent implements OnInit {
  @Input()
  temp?: number;
  @Input()
  tempMin?: number;
  @Input()
  tempMax?: number;
  @Input()
  city?: string;
  @Input()
  feels?: number;
  @Input()
  desc?: string;
  @Input()
  icon?: string;

  feelTxt: string;


  constructor() {
    this.feelTxt = MyStrings.brief_feels_title;
    
  }

  ngOnInit(): void {
  }

}
