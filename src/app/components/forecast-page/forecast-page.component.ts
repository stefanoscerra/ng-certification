import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationStatus } from 'src/app/models/location-status';

@Component({
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit {
  forecast: LocationStatus[];

  constructor(private route: ActivatedRoute,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let zipCode = paramMap.get('zipCode');
      this.weatherService.getLocationForecast(zipCode).subscribe(forecast => {
        this.forecast = forecast;
      });
    })
  }

}
