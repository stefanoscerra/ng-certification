import { Component, OnInit, Input } from '@angular/core';
import { LocationStatus } from 'src/app/models/location-status';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css']
})
export class LocationForecastComponent implements OnInit {
  @Input() forecast: LocationStatus[];

  constructor() { }

  ngOnInit(): void {
  }

}
