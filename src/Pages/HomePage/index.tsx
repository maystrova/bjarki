import React, { useContext, useEffect, useState } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { CITIES, CityType, COUNTRIES } from 'services/type'
import { ClientWeather, getWeather } from 'services/weather'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Search } from 'Components/Search'

import {
    StyledAdditionalInformation,
    StyledChooseOption,
    StyledChosenOption,
    StyledDiscoverToday,
    StyledHomePage,
    StyledHomePageFooter,
    StyledDiscoverTodayTitle,
    StyledScroll,
    StyledScrollArea,
    StyledScrollButton,
    StyledSearchActions,
    StyledPlacesToDiscover,
    StyledOrangeLine,
} from './style'

import down from 'Pages/HomePage/pics/arrow-down.svg'
import { HomePageInterface } from './type'
import { Destination } from 'Components/Destination'
import clouds from './pics/cloudy-icon.svg'
import rain from './pics/light-rain.svg'
import defaultWeather from './pics/cloudy-and-sun.svg'
import { DiscoverCard } from '../../Components/DiscoverCard'

const HomePage = () => {
    const { store } = useContext(BjarkiContext)
    const [weather, setWeather] = useState<ClientWeather>({
        temp: 0,
        feels_like: '',
    })
    const [destinationSearch, setDestinationSearch] = useState<string>('')
    const [currentCity, setCurrentCity] = useState<HomePageInterface>({
        city: CITIES.MONTE_ROSA,
        country: COUNTRIES.SWITZERLAND,
    })

    let params = useParams<{ alias: string }>()

    const getCityFromStore = (): void => {
        store.destinations.forEach(destination => {
            const foundCity: CityType | undefined = destination.city.find(
                city => city.alias === params.alias,
            )

            if (foundCity) {
                const newCurrentCity: HomePageInterface = {
                    city: foundCity.name,
                    country: destination.country,
                }
                setCurrentCity(newCurrentCity)
            }
        })
        return undefined
    }

    const handleGetWeather = async (city: HomePageInterface) => {
        try {
            const cityWeather = await getWeather(city.city)

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
        getCityFromStore()
    }, [])

    useEffect(() => {
        handleGetWeather(currentCity)
    }, [currentCity])

    return (
        <div>
            <StyledHomePage
                city={currentCity ? currentCity.city : CITIES.MONTE_ROSA}
            >
                <Destination
                    city={currentCity.city}
                    country={currentCity.country}
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
                <StyledHomePageFooter>
                    <StyledChooseOption>
                        <StyledChosenOption>
                            <input type='radio' />
                            <span>Places to stay</span>
                        </StyledChosenOption>
                        <StyledChosenOption>
                            <input type='radio' />
                            <span>Adventures</span>
                        </StyledChosenOption>
                    </StyledChooseOption>
                    <StyledSearchActions>
                        <StyledScrollArea>
                            <div>
                                {' '}
                                <StyledScroll>Scroll</StyledScroll>
                                <StyledScrollButton
                                    onClick={() => scroll.scrollToBottom()}
                                >
                                    <Icon
                                        size={ICON_SIZE.XX_SMALL}
                                        src={down}
                                    />
                                </StyledScrollButton>
                            </div>
                        </StyledScrollArea>
                        <div>
                            <Search
                                onDestinationSearchTape={event => {
                                    setDestinationSearch(event.target.value)
                                }}
                                value={destinationSearch}
                            />
                        </div>
                    </StyledSearchActions>
                </StyledHomePageFooter>
            </StyledHomePage>
            <StyledAdditionalInformation>
                <StyledDiscoverToday>
                    <StyledDiscoverTodayTitle>
                        <StyledOrangeLine>––</StyledOrangeLine>
                        <h3>Discover Today</h3>
                        <span>
                            Come and explore the best of the world, from modern
                            cities to natural landscapes
                        </span>
                    </StyledDiscoverTodayTitle>
                    <StyledPlacesToDiscover>
                        <DiscoverCard
                            country={COUNTRIES.UNITED_STATES}
                            city={CITIES.YOSEMITE}
                        />
                        <DiscoverCard
                            country={COUNTRIES.ICELAND}
                            city={CITIES.REYNISFJARA}
                        />
                        <DiscoverCard
                            country={COUNTRIES.ITALY}
                            city={CITIES.VENICE}
                        />
                        <DiscoverCard
                            country={COUNTRIES.JAPAN}
                            city={CITIES.TOKYO}
                        />
                    </StyledPlacesToDiscover>
                </StyledDiscoverToday>
            </StyledAdditionalInformation>
        </div>
    )
}

export { HomePage }
