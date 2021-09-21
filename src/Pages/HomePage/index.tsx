import React, { useContext, useState, useEffect } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { CITIES, DestinationType } from 'services/type'
import { ClientWeather, getWeather } from 'services/weather'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Search } from 'Components/Search'
import { Destination } from 'Components/Destination'

import {
    StyledHomePage,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollArea,
    StyledScrollButton,
    StyledSearchActions,
    StyledChooseOption,
    StyledChosenOption,
    StyledDiscoverToday,
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
    const [destinationSearch, setDestinationSearch] = useState<string>('')
    // const [scroll, setScroll] = useState<boolean>(false)

    let params = useParams<{ alias: string }>()

    const destination: DestinationType | undefined = store.destinations.find(
        destination => destination.alias === params.alias,
    )

    const handleGetWeather = async (city: string) => {
        try {
            const cityWeather = await getWeather(city)

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
        <div>
            <StyledHomePage
                city={destination ? destination.city : CITIES.MONTE_ROSA}
            >
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
            <StyledDiscoverToday>
                <div>
                    <h3>Discover Today</h3>
                    <div>
                        Come and explore the best of the world, from modern
                        cities to natural landscapes
                    </div>
                </div>
            </StyledDiscoverToday>
        </div>
    )
}

export { HomePage }
