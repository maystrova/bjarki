import styled, { css } from 'styled-components'

import { CITIES } from 'services/type'

import monteRosa from 'destinations/pics/monte-rosa.jpg'
import chongqing from 'destinations/pics/chongqing.jpg'
import venice from 'destinations/pics/venice.jpg'

interface StyledHomePageProps {
    city: CITIES
}

const StyledHomePage = styled.div`
    background-color: gray;
    color: #fff;
    padding: 30px 85px;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    position: relative;

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
`

const StyledHomePageHeaderLogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledHomePageHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
`

const StyledHomePageFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 11fr;
    height: 72px;
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
    position: absolute;
    bottom: 0;
    right: 0;
    left: 85px;
    display: grid;
    grid-template-columns: 1fr 11fr;
`

const StyledScrollArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export {
    StyledHomePage,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollButton,
    StyledSearchActions,
    StyledScrollArea,
}
