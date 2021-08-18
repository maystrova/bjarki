import styled, { css } from 'styled-components'
import { ICON_SIZE } from './index'

interface StyledIconProps {
    size: ICON_SIZE
}

const StyledIcon = styled.img`
    display: block;

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.X_SMALL &&
        css`
            width: 6px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.SMALL &&
        css`
            width: 22px;
        `}
`

export { StyledIcon }
