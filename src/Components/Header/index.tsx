import React from 'react'

import { Logo } from 'Components/Logo'
import { HeaderMenu } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'

import { StyledHeader, StyledLogo } from './style'

interface HeaderProps {
    onSwitchLangClicked: () => void
    onLogInClicked: () => void
    onSignUpClicked: () => void
    onDealClicked: () => void
    onFlightClicked: () => void
    onDiscoversClicked: () => void
    onNewsClicked: () => void
}

const Header = ({
    onLogInClicked,
    onSwitchLangClicked,
    onSignUpClicked,
    onDealClicked,
    onNewsClicked,
    onDiscoversClicked,
    onFlightClicked,
}: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Logo type={'HeaderLogo'} title={'Bjarki'} />
                <HeaderMenu
                    onDealClick={onDealClicked}
                    onDiscoversClick={onDiscoversClicked}
                    onFlightClick={onFlightClicked}
                    onNewsClick={onNewsClicked}
                />
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
