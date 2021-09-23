import styled, { css } from 'styled-components'
import { CITIES } from 'services/type'

import tokyo from './pics/tokyo.png'
import yosemite from './pics/yosemite.png'
import reynisfjara from './pics/reynisfjara.png'
import venice from './pics/venice.png'

interface StyledDiscoverCardProps {
    city: string
}

const StyledDiscoverCard = styled.div`
    width: 160px;
    height: 250px;
    border-radius: 4px;
    color: rgba(196, 196, 196, 1);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 16px;

    ${(props: StyledDiscoverCardProps) =>
        props.city === CITIES.TOKYO &&
        css`
            background: no-repeat url(${tokyo});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.city === CITIES.YOSEMITE &&
        css`
            background: no-repeat url(${yosemite});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.city === CITIES.VENICE &&
        css`
            background: no-repeat url(${venice});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.city === CITIES.REYNISFJARA &&
        css`
            background: no-repeat url(${reynisfjara});
            background-size: cover;
        `}
`

const StyledDiscoverCardCountry = styled.div`
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledDiscoverCardCity = styled.div`
    font-size: 28px;
`

export { StyledDiscoverCard, StyledDiscoverCardCountry, StyledDiscoverCardCity }
