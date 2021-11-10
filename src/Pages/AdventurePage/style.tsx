import styled, { css } from 'styled-components'
import { ADVENTURE_ALIAS } from 'adventures/adventures'
import yogaRetreat from './pics/yoga-retreat.jpg'
import exploreTheNorth from './pics/explore-the-north.jpg'
import scubaDiving from './pics/diving.jpg'
import camelRide from './pics/camel-ride.jpg'

interface StyledAdventurePageProps {
    alias: string
}

const StyledAdventurePage = styled.div`
    background-color: gray;
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props: StyledAdventurePageProps) =>
        props.alias === ADVENTURE_ALIAS.YOGA_RETREAT &&
        css`
            background: no-repeat url(${yogaRetreat});
            background-size: cover;
        `}

    ${(props: StyledAdventurePageProps) =>
        props.alias === ADVENTURE_ALIAS.EXPLORE_THE_NORTH &&
        css`
            background: no-repeat url(${exploreTheNorth});
            background-size: cover;
        `}

    ${(props: StyledAdventurePageProps) =>
        props.alias === ADVENTURE_ALIAS.SCUBA_DIVING &&
        css`
            background: no-repeat url(${scubaDiving});
            background-size: cover;
        `}

    ${(props: StyledAdventurePageProps) =>
        props.alias === ADVENTURE_ALIAS.CAMEL_RIDE &&
        css`
            background: no-repeat url(${camelRide});
            background-size: cover;
        `}
`

export { StyledAdventurePage }
