import { Injectable } from '@angular/core';
import { LocationStatus } from '../models/location-status';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private locationsStorageKey = 'locations';

  constructor(private httpClient: HttpClient) {
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

  getAllLocationsStatus(): LocationStatus[] {
    let result = [];
    let locations = this.getCurrentSavedLocations();
    
    return result;
  }


}
