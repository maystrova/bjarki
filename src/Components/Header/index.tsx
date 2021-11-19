import React from 'react'

import { Logo, LOGO_TYPE } from 'Components/Logo'
import { HeaderMenu, MENU_COLOR } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'
import { LOGO_COLOR } from 'Components/Logo/style'

import { StyledHeader, StyledLogo } from './style'

export enum HEADER_TYPE {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}

interface HeaderProps {
    onSwitchLangClicked: () => void
    onLogInClicked: () => void
    onSignUpClicked: () => void
    type: HEADER_TYPE
}

const Header = ({
    onLogInClicked,
    onSwitchLangClicked,
    onSignUpClicked,
    type,
}: HeaderProps) => {
    const logoTitle: string = 'Bjarki'

    return (
        <StyledHeader>
            <StyledLogo>
                <Logo
                    type={LOGO_TYPE.HEADER}
                    title={logoTitle}
                    color={LOGO_COLOR.WHITE}
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
