import styled, { css } from 'styled-components'
import { ADVENTURE_ALIAS } from 'adventures/adventures'
import yogaRetreat from './pics/yoga-retreat.jpg'

interface StyledAdventurePageProps {
    alias: string
}

const StyledAdventurePage = styled.div`
    background-color: gray;
    color: #fff;
    height: 100vh;
    background-size: cover;

    ${(props: StyledAdventurePageProps) =>
        props.alias === ADVENTURE_ALIAS.YOGA_RETREAT &&
        css`
            background: no-repeat url(${yogaRetreat});
        `}
`

export { StyledAdventurePage }
