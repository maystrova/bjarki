import React, { useContext, useEffect, useState } from 'react'
import { BjarkiContext } from 'context/storeContext'
import { useParams } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { CITIES, CityType, COUNTRIES } from 'services/type'
import { HomePageInterface } from './type'
import { ClientWeather, getWeather } from 'services/weather'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { DiscoverCard } from 'Components/DiscoverCard'
import { Destination } from 'Components/Destination'
import { AdditionalDiscoverInfo } from 'Components/AdditionalDiscoverInfo'
import { ExploreCard } from 'Components/ExploreCard'
import { Search } from 'Components/Search'
import { AdventureCard } from 'Components/AdventureCard'
import { ExploreList } from 'Components/ExploreList'

import {
    StyledAdditionalInformation,
    StyledChooseOption,
    StyledChosenOption,
    StyledDiscoverToday,
    StyledExploreCards,
    StyledHomePage,
    StyledHomePageFooter,
    StyledPlacesToDiscover,
    StyledPlacesToStay,
    StyledScroll,
    StyledScrollArea,
    StyledScrollButton,
    StyledSearchActions,
} from './style'
import down from 'Pages/HomePage/pics/arrow-down.svg'
import clouds from './pics/cloudy-icon.svg'
import rain from './pics/light-rain.svg'
import defaultWeather from './pics/cloudy-and-sun.svg'
import homesPic from 'Pages/HomePage/pics/homes.png'
import villasPic from 'Pages/HomePage/pics/villas.png'
import { StyledExploreList } from '../../Components/ExploreList/style'
import { Footer } from '../../Components/Footer'

interface exploreCardsType {
    title: string
    image: string
}

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

    const EXPLORE_CARDS: exploreCardsType[] = [
        { title: '15,000 + Homes', image: homesPic },
        { title: '34,000 + Villas', image: villasPic },
    ]

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
                                    onClick={() => scroll.scrollTo(700)}
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
                    <AdditionalDiscoverInfo
                        title={'Discover Today'}
                        description={
                            'Come and explore the best of the world, from modern cities to natural landscapes'
                        }
                    />
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
                <StyledPlacesToStay>
                    <StyledExploreCards>
                        {EXPLORE_CARDS.map(card => {
                            return (
                                <ExploreCard
                                    title={card.title}
                                    image={card.image}
                                    onCardClick={() => {}}
                                />
                            )
                        })}
                    </StyledExploreCards>
                    <AdditionalDiscoverInfo
                        title={'Nice Places to Stay'}
                        description={
                            'Lots of attractive options for apartments and villas '
                        }
                    />
                </StyledPlacesToStay>
                <ExploreList
                    title={'Featured Hotels'}
                    list={
                        <StyledExploreList>
                            {store.hotels.map(hotel => {
                                return (
                                    <AdventureCard
                                        image={hotel.image}
                                        title={hotel.title}
                                        location={hotel.location}
                                        price={hotel.price}
                                        priceDescription={'per night'}
                                    />
                                )
                            })}
                        </StyledExploreList>
                    }
                    onViewAllClick={() => {}}
                />
                <ExploreList
                    title={'Experience Top Adventures'}
                    list={
                        <StyledExploreList>
                            {store.adventures.map(adventure => {
                                return (
                                    <AdventureCard
                                        image={adventure.image}
                                        title={adventure.title}
                                        location={adventure.location}
                                        price={adventure.price}
                                        priceDescription={
                                            adventure.priceDescription
                                                ? adventure.priceDescription
                                                : ''
                                        }
                                    />
                                )
                            })}
                        </StyledExploreList>
                    }
                    onViewAllClick={() => {}}
                />
            </StyledAdditionalInformation>
            <Footer />
        </div>
    )
}

export { HomePage }
