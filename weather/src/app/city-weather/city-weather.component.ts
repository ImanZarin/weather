import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DayWeather, Weather, WeatherResult } from '../shared/api.models';
import { ApiService } from '../shared/api.service';
import { MyStorage } from '../shared/enums';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  selectedLat!: number;
  selectedLon!: number;
  weatherResult!: WeatherResult;
  weather!: Weather;
  todayWeather!: DayWeather;
  cityName!: string;
  isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedLat = params['lat'];
      this.selectedLon = params['lon'];
      if (this.selectedLat && this.selectedLon) {
        localStorage.setItem(
          MyStorage.selectedCity,
          JSON.stringify({ lat: this.selectedLat, lon: this.selectedLon })
        );
        this.api
          .getWeather(this.selectedLat, this.selectedLon)
          .subscribe((resp) => {
            this.weatherResult = resp;
            this.weather = resp.current.weather[0];
            this.todayWeather = resp.daily[0];
            this.cityName = resp.timezone.split("/")[1];
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
        return;
      }
    });
  }
}
