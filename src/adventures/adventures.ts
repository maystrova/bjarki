import { AdventuresType, CITIES, COUNTRIES } from 'services/type'

import yogaRetreat from './pics/yoga-retreat.png'
import exploreTheNorth from './pics/explore-the-north.png'
import scubaDiving from './pics/scuba-diving.png'
import camelRide from './pics/camel-ride.png'

const priceDescription = '15 day tour'

export enum ADVENTURE_ALIAS {
    YOGA_RETREAT = 'yoga-and-meditation-retreat',
    EXPLORE_THE_NORTH = 'explore-the-north',
    SCUBA_DIVING = 'scuba-diving-day-trips',
    CAMEL_RIDE = 'camel-ride-around-pyramids',
}

export enum ADVENTURE_TITLE {
    YOGA_RETREAT = 'Yoga & Meditation Retreat',
    EXPLORE_THE_NORTH = 'Explore The North',
    SCUBA_DIVING = 'Scuba Diving Day Trips',
    CAMEL_RIDE = 'Camel Ride Around Pyramids',
}

const ADVENTURES: AdventuresType[] = [
    {
        title: ADVENTURE_TITLE.YOGA_RETREAT,
        location: `${CITIES.BRIDGETOWN}, ${COUNTRIES.BARBADOS}`,
        price: 170,
        priceDescription: priceDescription,
        image: yogaRetreat,
        rating: 8.5,
        reviewsCount: 1143,
        alias: ADVENTURE_ALIAS.YOGA_RETREAT,
    },
    {
        title: ADVENTURE_TITLE.EXPLORE_THE_NORTH,
        location: `${CITIES.GODAFOSS}, ${COUNTRIES.ICELAND}`,
        price: 80,
        priceDescription: priceDescription,
        image: exploreTheNorth,
        rating: 9.3,
        reviewsCount: 183,
        alias: ADVENTURE_ALIAS.EXPLORE_THE_NORTH,
    },
    {
        title: ADVENTURE_TITLE.SCUBA_DIVING,
        location: `${CITIES.HOI_AN}, ${COUNTRIES.VIETNAM}`,
        price: 129,
        priceDescription: priceDescription,
        image: scubaDiving,
        rating: 8.9,
        reviewsCount: 423,
        alias: ADVENTURE_ALIAS.SCUBA_DIVING,
    },
    {
        title: ADVENTURE_TITLE.CAMEL_RIDE,
        location: `${CITIES.GIZA}, ${COUNTRIES.EGYPT}`,
        price: 50,
        priceDescription: priceDescription,
        image: camelRide,
        rating: 9.5,
        reviewsCount: 73,
        alias: ADVENTURE_ALIAS.CAMEL_RIDE,
    },
]

export { ADVENTURES }
