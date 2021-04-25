import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BriefComponent } from './brief/brief.component';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';
import { DetailComponent } from './detail/detail.component';
import { SearchResultComponent } from './search.result/search.result.component';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherComponent } from './city-weather/city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BriefComponent,
    HourlyComponent,
    DailyComponent,
    DetailComponent,
    SearchResultComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
