import styled from 'styled-components'

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
        color: #fff;
        display: flex;
        align-items: center;
        background: transparent;
        outline: none;
        border: none;

        & img {
            margin-left: 3px;
        }
    }
`

export { StyledMenu, StyledMenuItem }
