import { Injectable } from '@angular/core';
import { LocationStatus } from '../models/location-status';
import { OpenWeatherService } from '../openweather/services/open-weather.service';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private locationsStorageKey = 'locations';

  constructor(private openWeatherService: OpenWeatherService) {
  }

  addLocation(locationZipCode: string) {
    let locations = this.getCurrentSavedLocations();
    locations.push(locationZipCode);
    localStorage.setItem(this.locationsStorageKey, JSON.stringify(locations));
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

    let weatherData$ = locations.map(locationZipCode => this.openWeatherService.getCurrentWeatherForZipCode(locationZipCode));

    let locationsStatus = forkJoin(...weatherData$)
    .pipe(map(
      weatherData => weatherData.map(locationResponse => <LocationStatus> {
          zipCode: locationResponse.zipCode,
          name: locationResponse.data.name,
          temperature: locationResponse.data.main.temp,
          minTemp: locationResponse.data.main.temp_min,
          maxTemp: locationResponse.data.main.temp_max,
          conditions: locationResponse.data.weather[0].main
        })
    ));

    return locationsStatus;
  }


}
