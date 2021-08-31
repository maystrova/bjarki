import React, { useContext, useState, useEffect } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'

import { CITIES, DestinationType } from 'services/type'
import { ClientWeather, getWeather } from 'services/weather'

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
import clouds from 'Pages/HomePage/pics/cloudy-icon.svg'
import rain from 'Pages/HomePage/pics/light-rain.svg'
import defaultWeather from 'Pages/HomePage/pics/cloudy-and-sun.svg'

const HomePage = () => {
    const { store } = useContext(BjarkiContext)
    const [weather, setWeather] = useState<ClientWeather>({
        temp: 0,
        feels_like: '',
    })

    let params = useParams<{ alias: string }>()

    const destination: DestinationType | undefined = store.destinations.find(
        destination => destination.alias === params.alias,
    )

    const handleGetWeather = async (city: string) => {
        try {
            const cityWeather = await getWeather(city)

            // const weatherDescription = cityWeather?.weather.
            if (cityWeather) {
                setWeather({
                    temp: cityWeather.main.temp - 273.15,
                    feels_like: cityWeather.weather[0].main.toString(),
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (destination) {
            handleGetWeather(destination.city)
        }
    }, [destination])

    return (
        <StyledHomePage
            city={destination ? destination.city : CITIES.MONTE_ROSA}
        >
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
                    weatherDescription={weather.feels_like}
                    weatherIcon={
                        weather.feels_like === 'Clouds'
                            ? clouds
                            : weather.feels_like === 'Rain'
                            ? rain
                            : defaultWeather
                    }
                    temperature={`${Math.round(weather.temp).toString()}ºC`}
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
