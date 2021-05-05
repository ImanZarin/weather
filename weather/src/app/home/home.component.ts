import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyRoute, MyStorage } from '../shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem(MyStorage.selectedCity)) {
      const myCity: { lat: number; lon: number } = JSON.parse(
        localStorage.getItem(MyStorage.selectedCity) || ''
      );
      this.router.navigate([MyRoute.weather], {
        queryParams: {
          lat: myCity.lat,
          lon: myCity.lon,
        },
      });
    }
  }

}
