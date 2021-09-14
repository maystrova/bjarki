import React from 'react'

import { DiscoverCard } from 'Components/DiscoverCard'

import { COUNTRIES } from 'services/type'
import { StyledDiscoverPage, StyledDiscoverPageCountryList } from './style'

interface DiscoverPageProps {}

const DiscoverPage = ({}: DiscoverPageProps) => {
    let countries = Object.entries(COUNTRIES).map(([key, value]) => ({
        title: key,
        name: value,
    }))

    return (
        <StyledDiscoverPage>
            <div>
                <h1>Destination</h1>
                <StyledDiscoverPageCountryList>
                    {countries.map(country => {
                        return (
                            <DiscoverCard
                                cardNumber={1}
                                title={country.name}
                                country={country.name}
                            />
                        )
                    })}
                </StyledDiscoverPageCountryList>
            </div>
        </StyledDiscoverPage>
    )
}

export { DiscoverPage }
