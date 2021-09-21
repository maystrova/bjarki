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
    city: CITIES
}

const StyledHomePage = styled.div`
    background-color: gray;
    position: relative;
    color: #fff;
    height: 100vh;
    display: grid;
    grid-template-rows: 80% 1fr;

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
    position: absolute;
    bottom: 0;
    left: 85px;
    right: 0;
`

const StyledScroll = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
`

const StyledScrollButton = styled.button`
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledSearchActions = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
`

const StyledScrollArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StyledChooseOption = styled.div`
    display: flex;
    margin-bottom: 14px;
    align-items: center;
    margin-left: 10%;
`

const StyledChosenOption = styled.div`
    margin-right: 30px;

    & input {
        margin-right: 5px;
    }
`

const StyledDiscoverToday = styled.div``

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
}
