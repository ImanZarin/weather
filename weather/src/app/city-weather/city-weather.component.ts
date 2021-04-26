import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { weatherResult } from '../shared/api.models';
import { ApiService } from '../shared/api.service';
import { MyStorage } from '../shared/enums';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  selectedLat: number | undefined;
  selectedLon: number | undefined;
  cityWeather: weatherResult | undefined;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedLat = params['lat'];
      this.selectedLon = params['lon'];
      if (this.selectedLat && this.selectedLon) {
        localStorage.setItem(
          MyStorage.selectedCity,
          JSON.stringify({ lat: this.selectedLat, lon: this.selectedLon })
        );
        console.log(localStorage.getItem(MyStorage.selectedCity));
        this.api
          .getWeather(this.selectedLat, this.selectedLon)
          .subscribe((resp) => {
            console.log(resp);
            this.cityWeather = resp;
          });
      } else return;
    });
  }

  ngOnInit(): void {
    
  }
}
