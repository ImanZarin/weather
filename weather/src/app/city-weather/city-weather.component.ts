import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  selectedLat: number | undefined;
  selectedLon: number | undefined;
  //selectedCity ;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedLat = params['lat'];
      this.selectedLon = params['lon'];
    });
  }

  ngOnInit(): void {
    if (this.selectedLat && this.selectedLon)
      this.api
        .getWeather(this.selectedLat, this.selectedLon)
        .subscribe((resp) => {
          console.log(resp);
        
        });
    else return;
  }
}
