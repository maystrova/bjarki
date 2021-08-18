import { CITIES, COUNTRIES, DestinationType } from '../services/type'
import monteRosa from '../destinations/pics/monta-rosa-bg.png'
import chonquing from '../destinations/pics/chonquing-bg.png'

const DESTINATIONS: DestinationType[] = [
    {
        country: COUNTRIES.SWITZERLAND,
        city: CITIES.MONTE_ROSA,
        background: monteRosa,
        weather: 'Very cold',
    },
    {
        country: COUNTRIES.CHINA,
        city: CITIES.CHONGQING,
        background: chonquing,
        weather: 'Light rain',
    },
]

export { DESTINATIONS }
