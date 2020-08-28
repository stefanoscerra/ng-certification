import { WeatherConditions } from './weather-conditions';

export interface LocationStatus {
    conditions: WeatherConditions;
    temperature: number;
    minTemp: number;
    maxTemp: number;
}