import { CITIES, COUNTRIES, HotelType } from 'services/type'

import thePearlPacific from './pics/the-pearl-pacific.png'
import luxuryStarCost from './pics/luxury-star-cost.png'
import grandChillaxHotel from './pics/grand-chillax-hotel.png'
import plaza from './pics/the-plaza.png'

const HOTELS: HotelType[] = [
    {
        title: 'The Pearl Pacific',
        location: CITIES.MALDIVES,
        image: thePearlPacific,
        price: 251,
    },
    {
        title: 'Luxury Star Cost',
        location: CITIES.SAN_FRANCISCO,
        image: luxuryStarCost,
        price: 378,
    },
    {
        title: 'Grand Chillax Hotel',
        location: CITIES.RIO_DE_JANEIRO,
        image: grandChillaxHotel,
        price: 137,
    },
    {
        title: 'The Plaza',
        location: COUNTRIES.GREECE,
        image: plaza,
        price: 507,
    },
]

export { HOTELS }
