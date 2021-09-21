import React from 'react'

import { StyledDiscoverCard } from './style'
import { CITIES } from 'services/type'

interface DiscoverCardProps {
    country: string
    city: string
    place: CITIES
}

const DiscoverCard = ({ country, city, place }: DiscoverCardProps) => {
    return (
        <StyledDiscoverCard city={place}>
            <div>
                <div>{country}</div>
                <div>{city}</div>
            </div>
        </StyledDiscoverCard>
    )
}

export { DiscoverCard }
