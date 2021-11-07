import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { AdventureCard } from 'Components/AdventureCard'

import {
    StyledAdventureOption,
    StyledAdventuresListPage,
    StyledAvailableInfo,
} from './style'
import { StyledExploreList } from 'Components/ExploreList/style'

interface AdventuresListPageProps {
    // destination: string
}

const AdventuresListPage = ({}: AdventuresListPageProps) => {
    const { store } = useContext(BjarkiContext)

    return (
        <StyledAdventuresListPage>
            <StyledAvailableInfo>
                <div>
                    {store.adventures.length} Adventures
                    <span> available</span>
                </div>
                <div>
                    <StyledAdventureOption>
                        <input
                            type='number'
                            min='1'
                            placeholder={`${''} travellers`}
                        />
                    </StyledAdventureOption>
                </div>
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
