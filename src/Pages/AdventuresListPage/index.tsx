import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { AdventureCard } from 'Components/AdventureCard'

import { StyledAdventuresListPage, StyledAvailableInfo } from './style'
import { StyledExploreList } from 'Components/ExploreList/style'

interface AdventuresListPageProps {
    // destination: string
}

const AdventuresListPage = ({}: AdventuresListPageProps) => {
    const { store } = useContext(BjarkiContext)

    return (
        <StyledAdventuresListPage>
            <StyledAvailableInfo>
                {store.adventures.length} Adventures
                <span> available in {}</span>
            </StyledAvailableInfo>
            <StyledExploreList>
                {store.adventures.map(adventure => {
                    return (
                        <AdventureCard
                            image={adventure.image}
                            title={adventure.title}
                            location={adventure.location}
                            price={adventure.price}
                            priceDescription={'per 15 days tour'}
                            rating={adventure.rating}
                            reviewsCount={adventure.reviewsCount}
                        />
                    )
                })}
            </StyledExploreList>
        </StyledAdventuresListPage>
    )
}

export { AdventuresListPage }
