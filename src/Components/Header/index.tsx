import React from 'react'

import { Logo } from 'Components/Logo'
import { HeaderMenu } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'

import { StyledHeader, StyledLogo } from './style'

interface HeaderProps {
    onSwitchLangClicked: () => void
    onLogInClicked: () => void
    onSignUpClicked: () => void
}

const Header = ({
    onLogInClicked,
    onSwitchLangClicked,
    onSignUpClicked,
}: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Logo />
                <HeaderMenu />
            </StyledLogo>
            <UserActionMenu
                logIn={onLogInClicked}
                signUp={onSignUpClicked}
                switchLang={onSwitchLangClicked}
            />
        </StyledHeader>
    )
}

export { Header }
