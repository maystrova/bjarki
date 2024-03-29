import styled, { css } from 'styled-components'
import { ICON_SIZE } from './index'

interface StyledIconProps {
    size: ICON_SIZE
}

const StyledIcon = styled.img`
    display: block;

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.XXXX_SMALL &&
        css`
            width: 6px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.XXX_SMALL &&
        css`
            width: 8px;
            height: 8px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.XX_SMALL &&
        css`
            width: 10px;
            margin-left: 3px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.X_SMALL &&
        css`
            width: 12px;
            height: 12px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.SMALL &&
        css`
            width: 20px;
            height: 20px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.MEDIUM &&
        css`
            width: 22px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.LARGE &&
        css`
            width: 28px;
        `}
`

export { StyledIcon }
