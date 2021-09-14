import styled, { css } from 'styled-components'
import { COUNTRIES } from 'services/type'

import japan from 'Pages/DiscoverPage/pics/japan-card.png'
import greece from 'Pages/DiscoverPage/pics/greece-card.png'
import tanzania from 'Pages/DiscoverPage/pics/tanzania-card.png'
import vietnam from 'Pages/DiscoverPage/pics/vietnam-card.png'

interface StyledDiscoverCardProps {
    country: COUNTRIES
}

const StyledDiscoverCard = styled.div`
    width: 200px;
    height: 273px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ${(props: StyledDiscoverCardProps) =>
        props.country === COUNTRIES.JAPAN &&
        css`
            background: no-repeat url(${japan});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.country === COUNTRIES.GREECE &&
        css`
            background: no-repeat url(${greece});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.country === COUNTRIES.TANZANIA &&
        css`
            background: no-repeat url(${tanzania});
            background-size: cover;
        `}

    ${(props: StyledDiscoverCardProps) =>
        props.country === COUNTRIES.VIETNAM &&
        css`
            background: no-repeat url(${vietnam});
            background-size: cover;
        `}
`

const StyledDiscoverCardInfo = styled.div`
    display: grid;
    grid-row-gap: 5px;
    margin-bottom: 15px;
`

const StyledDiscoverCardCountryNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledDiscoverCard,
    StyledDiscoverCardInfo,
    StyledDiscoverCardCountryNumber,
}
