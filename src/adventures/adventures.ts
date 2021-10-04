import { AdventuresType, CITIES, COUNTRIES } from 'services/type'

import yogaRetreat from './pics/yoga-retreat.png'
import exploreTheNorth from './pics/explore-the-north.png'
import scubaDiving from './pics/scuba-diving.png'
import camelRide from './pics/camel-ride.png'

const priceDescription = '15 day tour'

const ADVENTURES: AdventuresType[] = [
    {
        title: 'Yoga & Meditation Retreat',
        location: `${CITIES.BRIDGETOWN}, ${COUNTRIES.BARBADOS}`,
        price: 170,
        priceDescription: priceDescription,
        image: yogaRetreat,
    },
    {
        title: 'Explore The North',
        location: `${CITIES.GODAFOSS}, ${COUNTRIES.ICELAND}`,
        price: 80,
        priceDescription: priceDescription,
        image: exploreTheNorth,
    },
    {
        title: 'Scuba Diving Day Trips',
        location: `${CITIES.HOI_AN}, ${COUNTRIES.VIETNAM}`,
        price: 129,
        priceDescription: priceDescription,
        image: scubaDiving,
    },
    {
        title: 'Camel Ride Around Pyramids',
        location: `${CITIES.GIZA}, ${COUNTRIES.EGYPT}`,
        price: 50,
        priceDescription: priceDescription,
        image: camelRide,
    },
]

export { ADVENTURES }
