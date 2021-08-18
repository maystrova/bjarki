import React from 'react'
import { Logo } from '../../Components/Logo'
import { StyledHomePage, StyledHomePageHeader } from './style'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { UserActionMenu } from '../../Components/UserActionMenu'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    return (
        <StyledHomePage>
            <StyledHomePageHeader>
                <Logo />
                <HeaderMenu />
                <UserActionMenu />
            </StyledHomePageHeader>
        </StyledHomePage>
    )
}

export { HomePage }
