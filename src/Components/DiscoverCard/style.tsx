import styled, { css } from 'styled-components'
import { CITIES } from 'services/type'

import tokyo from './pics/tokyo.png'

interface StyledDiscoverCardProps {
    city: CITIES
}

const StyledDiscoverCard = styled.div`
    width: 160px;
    height: 250px;
    border-radius: 4px;
    color: rgba(196, 196, 196, 1);

    ${(props: StyledDiscoverCardProps) =>
        props.city === CITIES.TOKYO &&
        css`
            background: no-repeat url(${tokyo});
            background-size: cover;
        `}
`

export { StyledDiscoverCard }
