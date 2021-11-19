import React from 'react'

import { Logo, LOGO_TYPE } from 'Components/Logo'
import { HeaderMenu, MENU_COLOR } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'

import { StyledHeader, StyledLogo } from './style'
import { LOGO_COLOR } from 'Components/Logo/style'

import arrow from 'Components/HeaderMenu/pics/arrow.svg'
import blackArrow from 'Components/HeaderMenu/pics/black-arrow.svg'

interface HeaderProps {
    onSwitchLangClicked: () => void
    onLogInClicked: () => void
    onSignUpClicked: () => void
    logoColor: LOGO_COLOR
}

const Header = ({
    onLogInClicked,
    onSwitchLangClicked,
    onSignUpClicked,
    logoColor,
}: HeaderProps) => {
    const logoTitle: string = 'Bjarki'

    return (
        <StyledHeader>
            <StyledLogo>
                <Logo
                    type={LOGO_TYPE.HEADER}
                    title={logoTitle}
                    color={logoColor}
                />
                <HeaderMenu
                    color={
                        LOGO_COLOR.WHITE ? MENU_COLOR.WHITE : MENU_COLOR.BLACK
                    }
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
