import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { SearchResultComponent } from './search.result/search.result.component';

const routes: Routes = [{ path: 'weather', component:  CityWeatherComponent},
{ path: 'search', component:  SearchResultComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
