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

interface StyledHomePageProps {
    city: string
}

const StyledHomePage = styled.div`
    background-color: gray;
    color: #fff;
    height: 100vh;
    display: grid;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.MONTE_ROSA &&
        css`
            background: no-repeat url(${monteRosa});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.CHONGQING &&
        css`
            background: no-repeat url(${chongqing});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.VENICE &&
        css`
            background: no-repeat url(${venice});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.NEW_YORK &&
        css`
            background: no-repeat url(${newYork});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.SAN_FRANCISCO &&
        css`
            background: no-repeat url(${sfo});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.REYNISFJARA &&
        css`
            background: no-repeat url(${reynisfjara});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.TOKYO &&
        css`
            background: no-repeat url(${tokyo});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.YOSEMITE &&
        css`
            background: no-repeat url(${yosemite});
            background-size: cover;
        `}

    ${(props: StyledHomePageProps) =>
        props.city === CITIES.LUANG_PRABANG &&
        css`
            background: no-repeat url(${luangPrabang});
            background-size: cover;
        `}
`

const StyledHomePageFooter = styled.div`
    display: grid;
    align-items: flex-end;
    padding-left: 85px;
`

const StyledHeaderWrapper = styled.div`
    padding: 0 85px;
`

const StyledScroll = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
`

const StyledScrollButton = styled.button`
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

const StyledSearchActions = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
`

const StyledScrollArea = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
`

const StyledChooseOption = styled.div`
    display: flex;
    margin-bottom: 14px;
    align-items: center;
`

const StyledChosenOption = styled.div`
    margin-right: 30px;
    cursor: pointer;

    & input {
        margin-right: 5px;
    }
`

const StyledAdditionalInformation = styled.div`
    padding: 0 85px;
`

const StyledAdditionalInfoContainer = styled.div`
    max-width: 1200px;
    display: grid;
    grid-row-gap: 100px;
`

const StyledDiscoverToday = styled.div`
    height: 423px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledPlacesToDiscover = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
`

const StyledExploreCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
`

const StyledPlacesToStay = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export {
    StyledHomePage,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollButton,
    StyledSearchActions,
    StyledScrollArea,
    StyledChooseOption,
    StyledChosenOption,
    StyledDiscoverToday,
    StyledPlacesToDiscover,
    StyledAdditionalInformation,
    StyledPlacesToStay,
    StyledExploreCards,
    StyledAdditionalInfoContainer,
    StyledHeaderWrapper,
}
