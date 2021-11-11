import React from 'react'

import { COUNTRIES } from 'services/type'

import {
    StyledCountryCard,
    StyledCountryCardInfo,
    StyledCountryCardCountryNumber,
} from './style'

interface CountryCardProps {
    cardNumber: string
    title: string
    country: COUNTRIES
}

const CountryCard = ({ cardNumber, title, country }: CountryCardProps) => {
    return (
        <StyledCountryCard country={country}>
            <StyledCountryCardInfo>
                <StyledCountryCardCountryNumber>
                    <div>{`–– ${cardNumber} ––`}</div>
                </StyledCountryCardCountryNumber>
                <h1>{title}</h1>
            </StyledCountryCardInfo>
        </StyledCountryCard>
    )
}

export { CountryCard }
