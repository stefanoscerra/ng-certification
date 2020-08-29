import { Component, OnInit, Input } from '@angular/core';
import { WeatherConditions } from 'src/app/models/weather-conditions';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {
  @Input() conditions: WeatherConditions;

  iconUrl: string;

  constructor() { }

  ngOnInit(): void {    
    this.iconUrl = this.getIconUrl();
  }


  private getIconUrl(): string {
    let baseUrl = "https://www.angulartraining.com/images/weather";
    let iconName: string;

    switch (this.conditions) {
      case WeatherConditions.Clouds:
        iconName = 'clouds.png';
        break;
      case WeatherConditions.Rain:
        iconName = 'rain.png';
        break;
      case WeatherConditions.Snow:
        iconName = 'snow.png';
        break;
      default:
        iconName = 'sun.png';
        break;
    }

    let url = `${baseUrl}/${iconName}`;
    return url;
  }
}
