import React, { useContext } from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Weather } from 'Components/Weather'

import {
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDay,
    StyledDestination,
    StyledDestinationInfo,
    StyledDestinationTitle,
    StyledDiscover,
    StyledDiscoverTitle,
    StyledMonth,
} from './style'

import further from 'Pages/HomePage/pics/arrow-right.svg'
import { Button, BUTTON_TYPE } from '../Button'
import { tr } from '../../services/language'
import { BjarkiContext } from '../../context/storeContext'

interface DestinationProps {
    city: string
    country: string
    weatherIcon: string
    temperature: string
    weatherDescription: string
    onDiscoverClick: () => void
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
    onDiscoverClick,
}: DestinationProps) => {
    const { store } = useContext(BjarkiContext)

    const discoverTitle = tr('discover', store.currentLanguage)

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

                    <div>
                        <Button
                            onClick={onDiscoverClick}
                            type={BUTTON_TYPE.DISCOVER}
                            children={
                                <StyledDiscover>
                                    <StyledDiscoverTitle>
                                        {discoverTitle}
                                    </StyledDiscoverTitle>
                                    <Icon
                                        size={ICON_SIZE.X_SMALL}
                                        src={further}
                                    />
                                </StyledDiscover>
                            }
                        />
                    </div>
                </div>
            </StyledDestinationInfo>
        </StyledDestination>
    )
}

export { Destination }
