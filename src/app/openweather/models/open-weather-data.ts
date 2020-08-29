export interface OpenWeatherData {
    name: string;
    weather: Array<{
        main: string;
        description: string;
    }>;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    dt: number;
}