import { Router } from '@angular/router';
import { MyStorage, MyUnits } from './enums';

export function changeSetting(isMetric: boolean, router: Router) {
  if (isMetric) localStorage.setItem(MyStorage.unit, MyUnits.metric);
  else localStorage.setItem(MyStorage.unit, MyUnits.imperial);
  router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  router.onSameUrlNavigation = 'reload';
  router.navigateByUrl(router.url);
}
