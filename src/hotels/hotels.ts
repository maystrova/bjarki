import { AdventuresType, CITIES, COUNTRIES } from 'services/type'

import thePearlPacific from './pics/the-pearl-pacific.png'
import luxuryStarCost from './pics/luxury-star-cost.png'
import grandChillaxHotel from './pics/grand-chillax-hotel.png'
import plaza from './pics/the-plaza.png'

export enum HOTELS_ALIAS {
    THE_PEARL_PACIFIC = 'the-pearl-pacific',
    LUXURY_STAR_COST = 'luxury-star-cost',
    GRAND_CHILLAX_HOTEL = 'grand-chillax-hotel',
    PLAZA = 'the-plaza',
}

const HOTELS: AdventuresType[] = [
    {
        title: 'The Pearl Pacific',
        location: CITIES.MALDIVES,
        image: thePearlPacific,
        price: 251,
        rating: 9.5,
        reviewsCount: 247,
        alias: HOTELS_ALIAS.THE_PEARL_PACIFIC,
    },
    {
        title: 'Luxury Star Cost',
        location: CITIES.SAN_FRANCISCO,
        image: luxuryStarCost,
        price: 378,
        rating: 8.5,
        reviewsCount: 1203,
        alias: HOTELS_ALIAS.LUXURY_STAR_COST,
    },
    {
        title: 'Grand Chillax Hotel',
        location: CITIES.RIO_DE_JANEIRO,
        image: grandChillaxHotel,
        price: 137,
        rating: 9.3,
        reviewsCount: 77,
        alias: HOTELS_ALIAS.GRAND_CHILLAX_HOTEL,
    },
    {
        title: 'The Plaza',
        location: COUNTRIES.GREECE,
        image: plaza,
        price: 507,
        rating: 9.1,
        reviewsCount: 3471,
        alias: HOTELS_ALIAS.PLAZA,
    },
]

export { HOTELS }
