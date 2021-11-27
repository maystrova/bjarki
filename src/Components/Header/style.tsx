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
    padding: 0 85px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    white-space: nowrap;
`

const StyledLogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

    :last-child {
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

export { StyledHeader, StyledLogo, StyledMenu, StyledMenuItem }
