import React from 'react'

import {
    StyledDiscoverCard,
    StyledDiscoverCardCity,
    StyledDiscoverCardCountry,
} from './style'

interface DiscoverCardProps {
    country: string
    city: string
}

const DiscoverCard = ({ country, city }: DiscoverCardProps) => {
    return (
        <StyledDiscoverCard city={city}>
            <div>
                <StyledDiscoverCardCountry>{country}</StyledDiscoverCardCountry>
                <StyledDiscoverCardCity>{city}</StyledDiscoverCardCity>
            </div>
        </StyledDiscoverCard>
    )
}

export { DiscoverCard }
