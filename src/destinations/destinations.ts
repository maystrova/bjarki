import { CITIES, COUNTRIES, DestinationType } from 'services/type'

const DESTINATIONS: DestinationType[] = [
    {
        country: COUNTRIES.SWITZERLAND,
        city: CITIES.MONTE_ROSA,
        alias: 'monte-rosa',
    },
    {
        country: COUNTRIES.CHINA,
        city: CITIES.CHONGQING,
        alias: 'chongqing',
    },
    {
        country: COUNTRIES.ITALY,
        city: CITIES.VENICE,
        alias: 'venice',
    },
]

export { DESTINATIONS }
