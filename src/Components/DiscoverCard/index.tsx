import React from 'react'
import { StyledDiscoverCard } from './style'
import { COUNTRIES } from 'services/type'

interface DiscoverCardProps {
    cardNumber: number
    title: string
    country: COUNTRIES
}

const DiscoverCard = ({ cardNumber, title, country }: DiscoverCardProps) => {
    return (
        <StyledDiscoverCard country={country}>
            <div>{cardNumber}</div>
            <h1>{title}</h1>
        </StyledDiscoverCard>
    )
}

export { DiscoverCard }
