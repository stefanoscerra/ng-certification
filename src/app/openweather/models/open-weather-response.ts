import { OpenWeatherData } from './open-weather-data';

export interface OpenWeatherResponse {
  zipCode: string;
  data: OpenWeatherData;
}
