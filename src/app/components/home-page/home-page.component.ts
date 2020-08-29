import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LocationStatus } from 'src/app/models/location-status';
@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  locationsStatus: LocationStatus[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getAllLocationsStatus();
  }

  private getAllLocationsStatus() {
    this.weatherService.getAllLocationsStatus().subscribe(status => {
      this.locationsStatus = status;
    });
  }

  addLocation(zipCode: string) {
    this.weatherService.addLocation(zipCode);
    this.getAllLocationsStatus();
  }

  removeLocation(locationZipCode: string) {
    this.weatherService.removeLocation(locationZipCode);
    this.getAllLocationsStatus();
  }

}
