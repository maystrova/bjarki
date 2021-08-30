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
    StyledWeather,
    StyledExplore,
    StyledExploreButton,
} from './style'
import cloud from 'Pages/HomePage/pics/cloud.svg'
import further from 'Pages/HomePage/pics/arrow-right.svg'
import explore from 'Pages/HomePage/pics/explore.png'

interface DestinationProps {
    city: string
    country: string
    weather: string
}

const today = new Date()
const date = today.getDate()
const month = today.getMonth()

const Destination = ({ country, city }: DestinationProps) => {
    return (
        <StyledDestination>
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
