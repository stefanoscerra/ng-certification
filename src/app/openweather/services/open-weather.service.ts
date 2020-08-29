import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenWeatherStatus } from '../models/open-weather-status';
import { map } from 'rxjs/operators';
import { OpenWeatherResponse } from '../models/open-weather-response';
import { OpenWeatherForecast } from '../models/open-weather-forecast';

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

    return this.httpClient.get<OpenWeatherStatus>('https://api.openweathermap.org/data/2.5/weather', 
      {params: queryParams}).pipe(map(response => ({
        zipCode: zipCode,
        city: response.name,
        data: [response]
      })));
  }

  getForecastForZipCode(zipCode: string, days=5): Observable<OpenWeatherResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('zip', zipCode);
    queryParams = queryParams.append('cnt', days.toString())
    queryParams = queryParams.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');    

    return this.httpClient.get<OpenWeatherForecast>('https://api.openweathermap.org/data/2.5/forecast/daily', 
      {params: queryParams}).pipe(map(response => ({
        zipCode: zipCode,
        city: response.city.name,
        data: response.list
      })));
  }
}
