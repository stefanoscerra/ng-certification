export interface OpenWeatherStatus {
    name?: string;
    weather: Array<{
        main: string;
        description: string;
    }>;
    main?: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    temp?: {
        min: number;
        max: number;
    }
    dt: number;
}