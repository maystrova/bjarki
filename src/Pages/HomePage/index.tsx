import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { BjarkiContext } from 'context/storeContext'

import { ROUTES } from 'services/route'
import {
    CITIES,
    CityType,
    CityWithCountry,
    COUNTRIES,
    DestinationType,
} from 'services/type'
import { HomePageInterface } from './type'

import { ClientWeather, getWeather } from 'services/weather'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { DiscoverCard } from 'Components/DiscoverCard'
import { Destination } from 'Components/Destination'
import { AdditionalDiscoverInfo } from 'Components/AdditionalDiscoverInfo'
import { ExploreCard } from 'Components/ExploreCard'
import { Search } from 'Components/Search'
import { AdventureCard } from 'Components/AdventureCard'
import { Footer } from 'Components/Footer'

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

import { StyledExploreList } from 'Components/ExploreList/style'
import down from 'Pages/HomePage/pics/arrow-down.svg'
import clouds from './pics/cloudy-icon.svg'
import rain from './pics/light-rain.svg'
import defaultWeather from './pics/cloudy-and-sun.svg'
import homesPic from 'Pages/HomePage/pics/homes.png'
import villasPic from 'Pages/HomePage/pics/villas.png'

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
    const [placesToStayIsChecked, setPlacesToStayIsChecked] =
        useState<boolean>(true)
    const [adventuresIsChecked, setAdventuresIsChecked] =
        useState<boolean>(false)

    const [destinationsList, setDestinationsList] = useState<CityWithCountry[]>(
        [],
    )

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

    const getCountryByCity = (
        city: string,
        destination: DestinationType,
    ): string => {
        const preparedCities: string[] = destination.city.map(city => city.name)

        if (preparedCities.includes(city)) {
            return destination.country
        }

        return 'City undefined'
    }

    const getDestinationsFromStore = (): void => {
        let newDestinations: CityWithCountry[] = []

        for (const value of store.destinations) {
            value.city.forEach(city => {
                newDestinations.push({
                    name: city.name,
                    country: getCountryByCity(city.name, value),
                })
            })
        }

        setDestinationsList(newDestinations)
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

    const history = useHistory()

    useEffect(() => {
        getCityFromStore()
    }, [])

    useEffect(() => getDestinationsFromStore(), [])

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
                    <StyledSearchActions>
                        <StyledScrollArea>
                            <div>
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
                            <StyledChooseOption>
                                <StyledChosenOption
                                    onClick={() => {
                                        setPlacesToStayIsChecked(true)
                                        setAdventuresIsChecked(false)
                                    }}
                                >
                                    <input
                                        type='radio'
                                        checked={placesToStayIsChecked}
                                    />
                                    <span>Places to stay</span>
                                </StyledChosenOption>
                                <StyledChosenOption
                                    onClick={() => {
                                        setAdventuresIsChecked(true)
                                        setPlacesToStayIsChecked(false)
                                    }}
                                >
                                    <input
                                        type='radio'
                                        checked={adventuresIsChecked}
                                    />
                                    <span>Adventures</span>
                                </StyledChosenOption>
                            </StyledChooseOption>
                            <Search
                                list={'destinations'}
                                onDestinationSearchTape={event => {
                                    setDestinationSearch(event.target.value)
                                }}
                                value={destinationSearch}
                                datalist={
                                    <div>
                                        {destinationsList.map(destination => {
                                            return (
                                                <option
                                                    value={`${destination.name}, ${destination.country}`}
                                                />
                                            )
                                        })}
                                    </div>
                                }
                                onSearchButtonClicked={() =>
                                    history.push(
                                        placesToStayIsChecked
                                            ? ROUTES.HOTEL_LIST_PAGE
                                            : ROUTES.ADVENTURES_LIST_PAGE,
                                    )
                                }
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
