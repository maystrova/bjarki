import React from 'react'

import { Logo } from 'Components/Logo'
import { HeaderMenu } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'

import { StyledHeader, StyledLogo } from './style'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Logo />
                <HeaderMenu />
            </StyledLogo>
            <UserActionMenu />
        </StyledHeader>
    )
}

export { Header }
