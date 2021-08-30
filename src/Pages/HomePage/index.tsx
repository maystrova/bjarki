import React, { useContext } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'

import { DestinationType } from 'services/type'

import { Logo } from 'Components/Logo'
import { HeaderMenu } from 'Components/HeaderMenu'
import { UserActionMenu } from 'Components/UserActionMenu'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Search } from 'Components/Search'
import { Destination } from 'Components/Destination'

import {
    StyledHomePage,
    StyledHomePageFooter,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledScroll,
    StyledScrollArea,
    StyledScrollButton,
    StyledSearchActions,
} from './style'

import down from 'Pages/HomePage/pics/arrow-down.svg'

const HomePage = () => {
    const { store } = useContext(BjarkiContext)

    let params = useParams<{ alias: string }>()

    const destination: DestinationType | undefined = store.destinations.find(
        destination => destination.alias === params.alias,
    )

    return (
        <StyledHomePage>
            <StyledHomePageHeader>
                <StyledHomePageHeaderLogo>
                    <Logo />
                    <HeaderMenu />
                </StyledHomePageHeaderLogo>
                <UserActionMenu />
            </StyledHomePageHeader>
            {destination && (
                <Destination
                    city={destination.city}
                    country={destination.country}
                    weather={destination.weather}
                />
            )}
            <StyledHomePageFooter>
                <StyledSearchActions>
                    <StyledScrollArea>
                        <div>
                            {' '}
                            <StyledScroll>Scroll</StyledScroll>
                            <StyledScrollButton>
                                <Icon size={ICON_SIZE.XX_SMALL} src={down} />
                            </StyledScrollButton>
                        </div>
                    </StyledScrollArea>
                    <Search />
                </StyledSearchActions>
            </StyledHomePageFooter>
        </StyledHomePage>
    )
}

export { HomePage }
