import { OpenWeatherStatus } from './open-weather-status';

export interface OpenWeatherResponse {
  zipCode: string;
  city: string;
  data: Array<OpenWeatherStatus>;
}
