import styled, { css } from 'styled-components'
import { HEADER_TYPE } from './index'

interface StyledMenuProps {
    headerType: HEADER_TYPE
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    background: transparent;
    white-space: nowrap;
`

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-right: 30px;
    position: relative;

    &:last-child {
        margin-right: 0;
    }
    & button {
        display: flex;
        align-items: center;
        background: transparent;
        outline: none;
        border: none;

        ${(props: StyledMenuProps) =>
            props.headerType === HEADER_TYPE.WHITE &&
            css`
                color: #fff;
            `}

        ${(props: StyledMenuProps) =>
            props.headerType === HEADER_TYPE.BLACK &&
            css`
                color: #000;
            `}

        & img {
            margin-left: 3px;
        }
    }
`

const StyledMenuSubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    button {
        padding: 8px 5px;
        &:hover {
            opacity: 0.7;
        }
    }
`

export { StyledHeader, StyledMenu, StyledMenuItem, StyledMenuSubMenu }
