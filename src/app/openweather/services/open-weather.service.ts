import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OpenWeatherData} from '../models/open-weather-data';
import { map } from 'rxjs/operators';
import { OpenWeatherResponse } from '../models/open-weather-response';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private httpClient: HttpClient) {    
  }

  getCurrentWeatherForZipCode(zipCode: string): Observable<OpenWeatherResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('zip', zipCode);
    queryParams = queryParams.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');

    return this.httpClient.get<OpenWeatherData>('https://api.openweathermap.org/data/2.5/weather', 
      {params: queryParams}).pipe(map(response => ({
        zipCode: zipCode,
        data: response
      })));
  }
}
