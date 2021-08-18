import React from 'react'
import { Logo } from '../../Components/Logo'
import {
    StyledHomePage,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
} from './style'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { UserActionMenu } from '../../Components/UserActionMenu'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    return (
        <StyledHomePage>
            <StyledHomePageHeader>
                <StyledHomePageHeaderLogo>
                    <Logo />
                    <HeaderMenu />
                </StyledHomePageHeaderLogo>
                <UserActionMenu />
            </StyledHomePageHeader>
        </StyledHomePage>
    )
}

export { HomePage }
