import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { tr, TRANSLATE_KEYS } from 'services/language'

import { AdventureCard } from 'Components/AdventureCard'
import { Header, HEADER_TYPE } from 'Components/Header'
import { Footer } from 'Components/Footer'

import {
    StyledAdventureFilter,
    StyledAdventureOption,
    StyledAdventuresList,
    StyledAdventuresListContainer,
    StyledAdventuresListPage,
    StyledAdventuresListWrapper,
    StyledAvailableInfo,
} from './style'

import { StyledExploreList } from 'Components/ExploreList/style'

interface AdventuresListPageProps {
    onLogInClicked: () => void
}

const AdventuresListPage = ({ onLogInClicked }: AdventuresListPageProps) => {
    const { store } = useContext(BjarkiContext)

    const ADVENTURE_TYPES: string[] = [
        'Retreat',
        'Diving',
        'Exploring',
        'Beach',
    ]
    const tourPriceTitle: string = tr(
        TRANSLATE_KEYS.PER_15_DAYS_TOUR,
        store.currentLanguage,
    )

    const doubleAdventures = store.adventures.concat(store.adventures)

    const adventuresTitle: string = tr(
        TRANSLATE_KEYS.ADVENTURES,
        store.currentLanguage,
    )

    const availableTitle: string = tr(
        TRANSLATE_KEYS.AVAILABLE,
        store.currentLanguage,
    )

    const travellersTitle: string = tr(
        TRANSLATE_KEYS.TRAVELLERS,
        store.currentLanguage,
    )

    const typeTitle: string = tr(TRANSLATE_KEYS.TYPE, store.currentLanguage)

    return (
        <div>
            <StyledAdventuresListPage>
                <Header
                    onLogInClicked={onLogInClicked}
                    headerType={HEADER_TYPE.BLACK}
                />
                <StyledAdventuresListWrapper>
                    <StyledAdventuresListContainer>
                        <StyledAvailableInfo>
                            <div>
                                {doubleAdventures.length} {adventuresTitle}
                                <span> {availableTitle}</span>
                            </div>
                            <div>
                                <StyledAdventureOption>
                                    <input
                                        type='number'
                                        min='1'
                                        placeholder={travellersTitle}
                                    />
                                </StyledAdventureOption>
                                <StyledAdventureOption>
                                    <input type='date' />
                                    <input type='date' />
                                </StyledAdventureOption>
                                <StyledAdventureOption>
                                    <input
                                        type='text'
                                        placeholder={typeTitle}
                                        list={'type'}
                                    />
                                    <datalist id={'type'}>
                                        {ADVENTURE_TYPES.map(type => {
                                            return <option value={type} />
                                        })}
                                    </datalist>
                                </StyledAdventureOption>
                                {/*<StyledAdventureOption>*/}
                                {/*    <Button*/}
                                {/*        onClick={() => {}}*/}
                                {/*        type={BUTTON_TYPE.ICON}*/}
                                {/*        children={*/}
                                {/*            <div>*/}
                                {/*                <StyledAdventureFilter>*/}
                                {/*                    <Icon*/}
                                {/*                        size={ICON_SIZE.MEDIUM}*/}
                                {/*                        src={filterIcon}*/}
                                {/*                    />*/}
                                {/*                    <div>More Filter</div>*/}
                                {/*                </StyledAdventureFilter>*/}
                                {/*            </div>*/}
                                {/*        }*/}
                                {/*    />*/}
                                {/*</StyledAdventureOption>*/}
                            </div>
                        </StyledAvailableInfo>
                        <StyledAdventuresList>
                            {doubleAdventures.map(adventure => {
                                return (
                                    <AdventureCard
                                        image={
                                            adventure.image
                                                ? adventure.image
                                                : ''
                                        }
                                        title={adventure.title}
                                        location={
                                            adventure.location
                                                ? adventure.location
                                                : ''
                                        }
                                        price={
                                            adventure.price
                                                ? adventure.price
                                                : 0
                                        }
                                        priceDescription={tourPriceTitle}
                                        rating={
                                            adventure.rating
                                                ? adventure.rating
                                                : 0
                                        }
                                        reviewsCount={
                                            adventure.reviewsCount
                                                ? adventure.reviewsCount
                                                : 0
                                        }
                                        onCardClick={() => {}}
                                    />
                                )
                            })}
                        </StyledAdventuresList>
                    </StyledAdventuresListContainer>
                </StyledAdventuresListWrapper>
            </StyledAdventuresListPage>
            <Footer />
        </div>
    )
}

export { AdventuresListPage }
