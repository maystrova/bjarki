import React from 'react'
import { Logo } from '../../Components/Logo'
import {
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDay,
    StyledDestinationInfo,
    StyledDestinationTitle,
    StyledDiscover,
    StyledExplore,
    StyledExploreButton,
    StyledHomePage,
    StyledHomePageContainer,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledMonth,
    StyledWeather,
} from './style'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { UserActionMenu } from '../../Components/UserActionMenu'

import { Icon, ICON_SIZE } from '../../Components/Icon'
import further from './pics/arrow-right.svg'
import cloud from './pics/cloud.svg'
import explore from './pics/explore.png'

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
                    <StyledDate>
                        <StyledDay>{date}</StyledDay>
                        <StyledMonth>{` / ${month}`}</StyledMonth>
                    </StyledDate>
                    <div>
                        <StyledWeather>
                            <Icon size={ICON_SIZE.SMALL} src={cloud} />
                            <span>-16C</span>
                            <span>Very Cold</span>
                        </StyledWeather>
                        <StyledDestinationTitle>
                            <StyledCity>Monte Rosa</StyledCity>

                            <StyledCountry>
                                <span>Switzerland</span>
                            </StyledCountry>
                        </StyledDestinationTitle>

                        <StyledDiscover>
                            <a href=''>
                                <span>Discover</span>
                                <Icon size={ICON_SIZE.X_SMALL} src={further} />
                            </a>
                        </StyledDiscover>
                    </div>
                </StyledDestinationInfo>
                <StyledExplore>
                    <StyledExploreButton>
                        <Icon size={ICON_SIZE.LARGE} src={explore} />
                    </StyledExploreButton>
                </StyledExplore>
            </StyledHomePageContainer>
            <footer></footer>
        </StyledHomePage>
    )
}

export { HomePage }
