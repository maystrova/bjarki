import React from 'react'

import { COUNTRIES } from 'services/type'

import {
    StyledDiscoverCard,
    StyledDiscoverCardInfo,
    StyledDiscoverCardCountryNumber,
} from './style'

interface DiscoverCardProps {
    cardNumber: string
    title: string
    country: COUNTRIES
}

const DiscoverCard = ({ cardNumber, title, country }: DiscoverCardProps) => {
    return (
        <StyledDiscoverCard country={country}>
            <StyledDiscoverCardInfo>
                <StyledDiscoverCardCountryNumber>
                    <div>{`–– ${cardNumber} ––`}</div>
                </StyledDiscoverCardCountryNumber>
                <h1>{title}</h1>
            </StyledDiscoverCardInfo>
        </StyledDiscoverCard>
    )
}

export { DiscoverCard }
