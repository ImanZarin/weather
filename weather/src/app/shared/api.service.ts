import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { searchApiUrl, weatherApiUrl } from './constants';
import { SearchResults, WeatherResult } from './api.models';
import { Observable } from 'rxjs';
import { MyStorage, MyUnits } from './enums';

export interface weatherOption {}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  search(cityName: string): Observable<SearchResults> {
    let params = new HttpParams();
    params = params.append('q', cityName);
    //supposed to be filled from .ev file for security reason in real published project
    params = params.append('appid', '1cb6ace31e50401f28b864f0b23fdc68');
    return this.http.get<SearchResults>(searchApiUrl, { params: params });
  }

  getWeather(lat: number, lon: number): Observable<WeatherResult> {
    let params = new HttpParams();
    let option = MyUnits.metric;
    if (
      localStorage.getItem(MyStorage.unit) &&
      localStorage.getItem(MyStorage.unit) == MyUnits.imperial
    )
      option = MyUnits.imperial;
    params = params.append('lat', lat.toString());
    params = params.append('lon', lon.toString());
    params = params.append('units', option);
    params = params.append('exclude', 'minutely,alerts');
    params = params.append('appid', '1cb6ace31e50401f28b864f0b23fdc68');
    return this.http.get<WeatherResult>(weatherApiUrl, { params: params });
  }
}
