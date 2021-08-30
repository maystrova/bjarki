import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledDestination } from './style'
import {
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDay,
    StyledDestinationInfo,
    StyledDestinationTitle,
    StyledDiscover,
    StyledMonth,
    StyledExplore,
    StyledExploreButton,
} from './style'
import further from 'Pages/HomePage/pics/arrow-right.svg'
import explore from 'Pages/HomePage/pics/explore.png'
import { Weather, WeatherProps } from '../Weather'

interface DestinationProps {
    city: string
    country: string
    weatherIcon: string
    temperature: string
    weatherDescription: string
}

const today = new Date()
const date = today.getDate()
const month = today.getMonth() + 1

const Destination = ({
    country,
    city,
    temperature,
    weatherDescription,
    weatherIcon,
}: DestinationProps) => {
    return (
        <StyledDestination>
            <StyledDestinationInfo>
                <StyledDate>
                    <StyledDay>{date}</StyledDay>
                    <StyledMonth>{` / ${month}`}</StyledMonth>
                </StyledDate>
                <div>
                    <Weather
                        icon={weatherIcon}
                        temperature={temperature}
                        description={weatherDescription}
                    />
                    <StyledDestinationTitle>
                        <StyledCity>{city}</StyledCity>

                        <StyledCountry>
                            <span>{country}</span>
                        </StyledCountry>
                    </StyledDestinationTitle>

                    <StyledDiscover>
                        <a href='#'>
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
        </StyledDestination>
    )
}

export { Destination }
