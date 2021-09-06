import styled, { css } from 'styled-components'
import { COUNTRIES } from 'services/type'

import japan from 'Pages/DiscoverPage/pics/japan-card.png'

interface StyledDiscoverCardProps {
    country: COUNTRIES
}

const StyledDiscoverCard = styled.div`
    width: 200px;
    height: 273px;
    border-radius: 4px;
    color: #fff;

    ${(props: StyledDiscoverCardProps) =>
        props.country === COUNTRIES.JAPAN &&
        css`
            background: no-repeat url(${japan});
            background-size: cover;
        `}
`

export { StyledDiscoverCard }
