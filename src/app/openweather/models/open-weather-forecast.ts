import { OpenWeatherStatus } from './open-weather-status';

export interface OpenWeatherForecast {
    list: Array<OpenWeatherStatus>;
    city: { 
        name: string
    };
}