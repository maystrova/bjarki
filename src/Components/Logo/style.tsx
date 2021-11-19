import styled, { css } from 'styled-components'

export enum LOGO_COLOR {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}

interface StyledLogoProps {
    color: LOGO_COLOR
}

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;

    & img {
        margin-right: 10px;
    }

    ${(props: StyledLogoProps) =>
        props.color === LOGO_COLOR.WHITE &&
        css`
            color: #fff;
        `}

    ${(props: StyledLogoProps) =>
        props.color === LOGO_COLOR.BLACK &&
        css`
            color: black;
        `}
`

export { StyledLogo }
