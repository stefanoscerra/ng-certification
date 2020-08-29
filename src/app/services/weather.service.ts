import { Injectable } from '@angular/core';
import { LocationStatus } from '../models/location-status';
import { OpenWeatherService } from '../openweather/services/open-weather.service';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenWeatherResponse } from '../openweather/models/open-weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private locationsStorageKey = 'locations';

  constructor(private openWeatherService: OpenWeatherService) {
  }

  addLocation(locationZipCode: string) {
    let locations = this.getCurrentSavedLocations();
    if (!locations.some(location => location === locationZipCode)) {
      locations.push(locationZipCode);
      localStorage.setItem(this.locationsStorageKey, JSON.stringify(locations));
    }
  }

  private getCurrentSavedLocations(): string[] {
    let locationsString = localStorage.getItem(this.locationsStorageKey);
    let locations: string[];

    if (locationsString) {
      locations = JSON.parse(locationsString);
    }
    else {
      locations = [];
    }

    return locations;
  }

  removeLocation(locationZipCode: string) {
    let locations = this.getCurrentSavedLocations();
    locations = locations.filter(location => location !== locationZipCode);
    localStorage.setItem(this.locationsStorageKey, JSON.stringify(locations));
  }

  getAllLocationsStatus(): Observable<LocationStatus[]> {
    let locations = this.getCurrentSavedLocations();
    if (!locations.length) {
      return of([]);
    }

    let weatherResponses$ = locations.map(locationZipCode => this.openWeatherService.getCurrentWeatherForZipCode(locationZipCode));

    let locationsStatus = forkJoin(...weatherResponses$)
    .pipe(map(
      (weatherResponses: OpenWeatherResponse[]) => weatherResponses.map(weatherResponse => 
        <LocationStatus> {
          zipCode: weatherResponse.zipCode,
          name: weatherResponse.city,
          timestamp: weatherResponse.data[0].dt * 1000,
          temperature: weatherResponse.data[0].main.temp,
          minTemp: weatherResponse.data[0].main.temp_min,
          maxTemp: weatherResponse.data[0].main.temp_max,
          conditions: weatherResponse.data[0].weather[0].main
        })
    ));

    return locationsStatus;
  }

  getLocationForecast(locationZipCode: string): Observable<LocationStatus[]> {
    return this.openWeatherService.getForecastForZipCode(locationZipCode)
    .pipe(map(
      weatherResponse => weatherResponse.data.map(weatherStatus => 
        <LocationStatus> {
          zipCode: weatherResponse.zipCode,
          name: weatherResponse.city,
          timestamp: weatherStatus.dt * 1000,
          minTemp: weatherStatus.temp.min,
          maxTemp: weatherStatus.temp.max,
          conditions: weatherStatus.weather[0].main
        })
    ));
  }

}
