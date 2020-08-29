import { WeatherConditions } from './weather-conditions';

export interface LocationStatus {
    zipCode: string;
    name: string;
    conditions: WeatherConditions;
    temperature: number;
    minTemp: number;
    maxTemp: number;
}