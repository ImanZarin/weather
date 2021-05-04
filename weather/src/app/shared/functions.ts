import { Router } from '@angular/router';
import { MyStorage, MyUnits } from './enums';

export function changeSetting(isMetric: boolean, router: Router) {
  if (isMetric) localStorage.setItem(MyStorage.unit, MyUnits.metric);
  else localStorage.setItem(MyStorage.unit, MyUnits.imperial);
  if (localStorage.getItem(MyStorage.selectedCity)) {
    router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    router.onSameUrlNavigation = 'reload';
    const selectedCityCoordinate: { lat: number; lon: number } = JSON.parse(
      localStorage.getItem(MyStorage.selectedCity) || ''
    );
    router.navigate(['/weather'], {
      queryParams: {
        lat: selectedCityCoordinate.lat,
        lon: selectedCityCoordinate.lon,
      },
    });
  }
}
