import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchResults } from './shared/api.models';
import { MyStrings } from './shared/constants';
import { MyRoute, MyStorage, MyUnits } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = MyStrings.app_name;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (
      !window.location.href.includes('/search') &&
      !window.location.href.includes('/weather')
    )
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
