import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Weather } from 'Components/Weather'

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
} from './style'

import further from 'Pages/HomePage/pics/arrow-right.svg'

interface DestinationProps {
    city: string
    country: string
    weatherIcon: string
    temperature: string
    weatherDescription: string
}

const today: any = new Date()
const date: string = today.getDate().toString()
const month: string = (today.getMonth() + 1).toString()
const updatedDate = date.length < 2 ? 0 + date : date
const updatedMonth = month.length < 2 ? 0 + month : month

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
                    <StyledDay>{`${updatedDate}`}</StyledDay>
                    <StyledMonth>{` / ${updatedMonth}`}</StyledMonth>
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
        </StyledDestination>
    )
}

export { Destination }
