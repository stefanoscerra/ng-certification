import { WeatherConditions } from './weather-conditions';

export interface LocationStatus {
    zipCode: string;
    name: string;
    timestamp: number;
    conditions: WeatherConditions;
    temperature: number;
    minTemp: number;
    maxTemp: number;
}