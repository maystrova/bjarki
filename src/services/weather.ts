import { CONFIG } from 'config'

interface WeatherState {
    description: 'clear sky'
    icon: string
    id: number
    main: string
}

export interface ServerWeatherResponse {
    base: string
    clouds: { all: number }
    cod: number
    coord: { lon: number; lat: number }
    dt: number
    id: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
    }
    name: string
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    visibility: number
    weather: WeatherState[]
}

export interface ClientWeather {
    temp: number
    feels_like: string
}

const getWeather = async (
    city: string,
): Promise<ServerWeatherResponse | undefined> => {
    try {
        const weatherResult: Response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONFIG.WEATHER_API_KEY}`,
        )

        if (weatherResult.ok) {
            return await weatherResult.json()
        }
    } catch (error) {
        console.error(error)
    }
}

export { getWeather }
