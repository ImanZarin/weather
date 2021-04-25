import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { searchApiUrl } from './constants';
import { searchResults } from './api.models';
import { Observable } from 'rxjs';

export interface weatherOption {

} 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  search(cityName: string): Observable<searchResults> {
    let params = new HttpParams();
    params = params.append('q', cityName);
    //supposed to be filled from .ev file for security reason in real published project 
    params = params.append('appid', "1cb6ace31e50401f28b864f0b23fdc68");
    return this.http.get<searchResults>(searchApiUrl, {params: params});
  }

  getWeather(cityId: number, option?: weatherOption) {
    return this.http.get(searchApiUrl, option);
  }
}
