import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MyStrings } from './shared/constants';
import { MyRoute, MyStorage } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = MyStrings.app_name;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // if (
    //   !window.location.href.includes(MyRoute.search) &&
    //   !window.location.href.includes(MyRoute.weather)
    // )
      
  }
}
