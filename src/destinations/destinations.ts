import { CITIES, COUNTRIES, DestinationType } from '../services/type'

const DESTINATIONS: DestinationType[] = [
    {
        country: COUNTRIES.SWITZERLAND,
        city: CITIES.MONTE_ROSA,
        weather: 'Very cold',
        alias: 'monte-rosa'
    },
    {
        country: COUNTRIES.CHINA,
        city: CITIES.CHONGQING,
        weather: 'Light rain',
        alias: 'chonqing'
    },
]

export { DESTINATIONS }
