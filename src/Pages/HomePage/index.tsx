import React from 'react'
import { Logo } from '../../Components/Logo'
import {
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDestinationInfo,
    StyledDiscover,
    StyledHomePage,
    StyledHomePageContainer,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledWeather,
} from './style'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { UserActionMenu } from '../../Components/UserActionMenu'

import { Icon, ICON_SIZE } from '../../Components/Icon'
import further from './pics/arrow-right.svg'
import cloud from './pics/cloud.svg'

interface HomePageProps {}

const today = new Date()

const date = today.getDate()
const month = today.getMonth()

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
            <StyledHomePageContainer>
                <StyledDestinationInfo>
                    <StyledDate>{`${date}/${month}`}</StyledDate>
                    <div>
                        <StyledWeather>
                            <Icon size={ICON_SIZE.SMALL} src={cloud} />
                            <span>-16C</span>
                            <span>Very Cold</span>
                        </StyledWeather>
                        <StyledCountry>Switzerland</StyledCountry>
                        <StyledCity>Monte Rosa</StyledCity>
                        <StyledDiscover>
                            <a href=''>
                                <span>Discover</span>
                                <Icon size={ICON_SIZE.X_SMALL} src={further} />
                            </a>
                        </StyledDiscover>
                    </div>
                </StyledDestinationInfo>
            </StyledHomePageContainer>
        </StyledHomePage>
    )
}

export { HomePage }
