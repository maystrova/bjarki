import styled from 'styled-components'

const StyledSignIn = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 30px 80px;
    display: grid;
    grid-row-gap: 30px;
`

const StyledSignInHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        width: 28px;
        height: 28px;
        border: none;
        background: transparent;
    }
`

const StyledSignInActions = styled.div``

const StyledSignInField = styled.label`
    border: 1px solid rgba(208, 208, 208, 1);
    border-radius: 4px;
    margin-bottom: 8px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px;

    & input {
        width: 100%;
        border: none;
    }

    & button {
        border: none;
        background: transparent;
    }
`

export {
    StyledSignIn,
    StyledSignInHeader,
    StyledSignInActions,
    StyledSignInField,
}
