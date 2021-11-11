import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { AdventureCard } from 'Components/AdventureCard'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import {
    StyledAdventureFilter,
    StyledAdventureOption,
    StyledAdventuresListPage,
    StyledAvailableInfo,
} from './style'
import { StyledExploreList } from 'Components/ExploreList/style'

import filterIcon from 'Pages/AdventuresListPage/pics/filter-icon.svg'

interface AdventuresListPageProps {
    // destination: string
}

const AdventuresListPage = ({}: AdventuresListPageProps) => {
    const { store } = useContext(BjarkiContext)

    const ADVENTURE_TYPES: string[] = [
        'Retreat',
        'Diving',
        'Exploring',
        'Beach',
    ]

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
                    <StyledAdventureOption>
                        <input type='date' />
                        <input type='date' />
                    </StyledAdventureOption>
                    <StyledAdventureOption>
                        <input type='text' placeholder={'Type'} list={'type'} />
                        <datalist id={'type'}>
                            {ADVENTURE_TYPES.map(type => {
                                return <option value={type} />
                            })}
                        </datalist>
                    </StyledAdventureOption>
                    <StyledAdventureOption>
                        <Button
                            onClick={() => {}}
                            type={BUTTON_TYPE.SOCIAL_MEDIA}
                            children={
                                <StyledAdventureFilter>
                                    <Icon
                                        size={ICON_SIZE.MEDIUM}
                                        src={filterIcon}
                                    />{' '}
                                    <div>More Filter</div>
                                </StyledAdventureFilter>
                            }
                        />
                    </StyledAdventureOption>
                </div>
            </StyledAvailableInfo>
            <StyledExploreList>
                {store.adventures.map(adventure => {
                    return (
                        <AdventureCard
                            image={adventure.image ? adventure.image : ''}
                            title={adventure.title}
                            location={
                                adventure.location ? adventure.location : ''
                            }
                            price={adventure.price ? adventure.price : 0}
                            priceDescription={'per 15 days tour'}
                            rating={adventure.rating ? adventure.rating : 0}
                            reviewsCount={
                                adventure.reviewsCount
                                    ? adventure.reviewsCount
                                    : 0
                            }
                            onCardClick={() => {}}
                        />
                    )
                })}
            </StyledExploreList>
        </StyledAdventuresListPage>
    )
}

export { AdventuresListPage }
