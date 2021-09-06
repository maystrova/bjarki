import styled from 'styled-components'

const StyledModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 1;
`

const StyledSignIn = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 10px 80px;
    display: grid;
    grid-row-gap: 20px;
    width: 30%;
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
        outline: none;
    }

    & button {
        border: none;
        background: transparent;
    }
`

const StyledSignInSubtitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledRememberMe = styled.label`
    font-size: 14px;
    color: rgba(100, 100, 100, 1);
    display: flex;
    align-items: center;
    cursor: pointer;
    & input {
        margin-right: 3px;
    }
`

const StyledOr = styled.div`
    color: rgba(100, 100, 100, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledSignInWithSocialMediaButtons = styled.div`
    display: grid;
    grid-gap: 10px;
`

const StyledSignInWithSocialMediaButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledSignInFooter = styled.footer`
    color: rgba(100, 100, 100, 1);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledSignIn,
    StyledSignInHeader,
    StyledSignInActions,
    StyledSignInField,
    StyledSignInSubtitles,
    StyledRememberMe,
    StyledOr,
    StyledSignInWithSocialMediaButtons,
    StyledSignInWithSocialMediaButton,
    StyledSignInFooter,
    StyledModal,
    StyledModalOverlay,
}
