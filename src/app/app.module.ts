import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ForecastPageComponent } from './components/forecast-page/forecast-page.component';
import { APP_BASE_HREF } from '@angular/common';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { LocationForecastComponent } from './components/location-forecast/location-forecast.component';
import { LocationStatusComponent } from './components/location-status/location-status.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ 
    AppComponent, 
    HomePageComponent, 
    ForecastPageComponent, 
    AddLocationComponent, 
    LocationForecastComponent, 
    LocationStatusComponent, 
    WeatherIconComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: APP_BASE_HREF, 
      useValue: '/'
    }
  ]
})
export class AppModule { }
