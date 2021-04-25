import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { searchApiUrl, weatherApiUrl } from './constants';
import { searchResults, weatherResult } from './api.models';
import { Observable } from 'rxjs';

export interface weatherOption {}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  search(cityName: string): Observable<searchResults> {
    let params = new HttpParams();
    params = params.append('q', cityName);
    //supposed to be filled from .ev file for security reason in real published project
    params = params.append('appid', '1cb6ace31e50401f28b864f0b23fdc68');
    return this.http.get<searchResults>(searchApiUrl, { params: params });
  }

  getWeather(lat: number, lon: number): Observable<weatherResult> {
    let params = new HttpParams();
    params = params.append('lat', lat.toString());
    params = params.append('lon', lon.toString());
    params = params.append('appid', '1cb6ace31e50401f28b864f0b23fdc68');
    return this.http.get<weatherResult>(weatherApiUrl, { params: params });
  }
}
