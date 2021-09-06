import React from 'react'
import { COUNTRIES } from 'services/type'
import { StyledDiscoverPage, StyledDiscoverPageCountryList } from './style'
import { DiscoverCard } from '../../Components/DiscoverCard'

interface DiscoverPageProps {}

const DiscoverPage = ({}: DiscoverPageProps) => {
    let countries = Object.entries(COUNTRIES)

    return (
        <StyledDiscoverPage>
            <div>
                <h1>Destination</h1>
                <StyledDiscoverPageCountryList>
                    {countries.map(country => {
                        return (
                            <DiscoverCard
                                cardNumber={1}
                                title={''}
                                country={COUNTRIES.JAPAN}
                            />
                        )
                    })}
                </StyledDiscoverPageCountryList>
            </div>
        </StyledDiscoverPage>
    )
}

export { DiscoverPage }
