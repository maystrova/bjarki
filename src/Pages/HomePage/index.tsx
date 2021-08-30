import React, { useContext, useEffect, useState } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'

import { CITIES, DestinationType } from 'services/type'

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

const API_KEY = '6cd56896dcdbfe08ac17e00b92366617'

const HomePage = () => {
    const { store } = useContext(BjarkiContext)
    const [weather, setWeather] = useState<any>([])

    let params = useParams<{ alias: string }>()

    const destination: DestinationType | undefined = store.destinations.find(
        destination => destination.alias === params.alias,
    )

    const getWeather = async (): Promise<any> => {
        const api_url = await fetch(
            `api.openweathermap.org/data/2.5/weather?q=${destination?.city}&callback=test&appid=${API_KEY}`,
        )
        const weatherData = api_url.json()
        console.log(weatherData)
    }

    // useEffect(() => {
    //     getWeather()
    // }, [])

    return (
        <StyledHomePage
            city={destination ? destination.city : CITIES.MONTE_ROSA}
        >
            <StyledHomePageHeader>
                <StyledHomePageHeaderLogo>
                    <Logo />
                    <button onClick={() => getWeather()}>click</button>
                    <HeaderMenu />
                </StyledHomePageHeaderLogo>
                <UserActionMenu />
            </StyledHomePageHeader>
            {destination && (
                <Destination
                    city={destination.city}
                    country={destination.country}
                    weatherDescription={weather}
                    weatherIcon={''}
                    temperature={''}
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
