import styled, { css } from 'styled-components'
import { COUNTRIES } from 'services/type'

import japan from 'Pages/DiscoverPage/pics/japan-card.png'
import greece from 'Pages/DiscoverPage/pics/greece-card.png'
import tanzania from 'Pages/DiscoverPage/pics/tanzania-card.png'
import vietnam from 'Pages/DiscoverPage/pics/vietnam-card.png'

interface StyledCountryCardProps {
    country: COUNTRIES
}

const StyledCountryCard = styled.div`
    width: 200px;
    height: 273px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ${(props: StyledCountryCardProps) =>
        props.country === COUNTRIES.JAPAN &&
        css`
            background: no-repeat url(${japan});
            background-size: cover;
        `}

    ${(props: StyledCountryCardProps) =>
        props.country === COUNTRIES.GREECE &&
        css`
            background: no-repeat url(${greece});
            background-size: cover;
        `}

    ${(props: StyledCountryCardProps) =>
        props.country === COUNTRIES.TANZANIA &&
        css`
            background: no-repeat url(${tanzania});
            background-size: cover;
        `}

    ${(props: StyledCountryCardProps) =>
        props.country === COUNTRIES.VIETNAM &&
        css`
            background: no-repeat url(${vietnam});
            background-size: cover;
        `}
`

const StyledCountryCardInfo = styled.div`
    display: grid;
    grid-row-gap: 5px;
    margin-bottom: 15px;
`

const StyledCountryCardCountryNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledCountryCard,
    StyledCountryCardInfo,
    StyledCountryCardCountryNumber,
}
