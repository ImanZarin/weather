import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { searchResults } from './shared/api.models';
import { MyStrings } from './shared/constants';
import { MyStorage, MyUnits } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = MyStrings.app_name;
  searchCity: searchResults | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(localStorage.getItem(MyStorage.selectedCity));
    if (localStorage.getItem(MyStorage.selectedCity)) {
      const myCity: { lat: number; lon: number } = JSON.parse(
        localStorage.getItem(MyStorage.selectedCity) || ''
      );
      console.log(myCity);
      this.router.navigate(['/weather'], {
        queryParams: {
          lat: myCity.lat,
          lon: myCity.lon,
        },
      });
    }
  }

  updateSearchResult(newR: searchResults) {
    this.searchCity = newR;
  }

  changeSetting(isMetric: boolean) {
    if (isMetric) localStorage.setItem(MyStorage.unit, MyUnits.metric);
    else localStorage.setItem(MyStorage.unit, MyUnits.imperial);
    if (localStorage.getItem(MyStorage.selectedCity)) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.onSameUrlNavigation = 'reload';
      const selectedCityCoordinate: { lat: number; lon: number } = JSON.parse(
        localStorage.getItem(MyStorage.selectedCity) || ''
      );
      this.router.navigate(['/weather'], {
        queryParams: {
          lat: selectedCityCoordinate.lat,
          lon: selectedCityCoordinate.lon,
        },
      });
    }
  }
}
