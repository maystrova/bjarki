import styled, { css } from 'styled-components'

import { CITIES } from 'services/type'

import monteRosa from 'destinations/pics/monte-rosa.jpg'
import chongqing from 'destinations/pics/chongqing.jpg'
import venice from 'destinations/pics/venice.jpg'
import newYork from 'destinations/pics/new-york.jpg'
import sfo from 'destinations/pics/sfo.jpg'
import reynisfjara from 'destinations/pics/reynisfjara.jpg'
import tokyo from 'destinations/pics/tokyo.jpg'
import yosemite from 'destinations/pics/yosemite.jpg'
import luangPrabang from 'destinations/pics/luang-prabang.jpg'

interface StyledDestinationPageProps {
    destination: string
}

const StyledDestinationPage = styled.div`
    padding: 0 85px;
    height: 100vh;
    display: grid;
    grid-row-gap: 50px;

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.MONTE_ROSA &&
        css`
            background: no-repeat url(${monteRosa});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.CHONGQING &&
        css`
            background: no-repeat url(${chongqing});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.VENICE &&
        css`
            background: no-repeat url(${venice});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.NEW_YORK &&
        css`
            background: no-repeat url(${newYork});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.SAN_FRANCISCO &&
        css`
            background: no-repeat url(${sfo});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.REYNISFJARA &&
        css`
            background: no-repeat url(${reynisfjara});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.TOKYO &&
        css`
            background: no-repeat url(${tokyo});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.YOSEMITE &&
        css`
            background: no-repeat url(${yosemite});
            background-size: cover;
        `}

    ${(props: StyledDestinationPageProps) =>
        props.destination === CITIES.LUANG_PRABANG &&
        css`
            background: no-repeat url(${luangPrabang});
            background-size: cover;
        `}
`

const StyledDestinationPageContainer = styled.div`
    max-width: 1200px;
    color: #fff;
    display: grid;
    grid-row-gap: 50px;
`

const StyledDestinationPageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

const StyledDestinationPageContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledDestinationPage,
    StyledDestinationPageContainer,
    StyledDestinationPageTitle,
    StyledDestinationPageContainerWrapper,
}
