import React, { useContext } from 'react'

import { tr, TRANSLATE_KEYS } from 'services/language'

import { BjarkiContext } from 'context/storeContext'

import { Header, HEADER_TYPE } from 'Components/Header'
import { AdventureCard } from 'Components/AdventureCard'
import { Footer } from 'Components/Footer'

import {
    StyledAdventureOption,
    StyledAdventuresList,
    StyledAdventuresListContainer,
    StyledAdventuresListPage,
    StyledAdventuresListWrapper,
    StyledAvailableInfo,
} from 'Pages/AdventuresListPage/style'
import { StyledExploreList } from 'Components/ExploreList/style'

interface HotelListPageProps {
    onLogInClicked: () => void
}

const HotelListPage = ({ onLogInClicked }: HotelListPageProps) => {
    const { store } = useContext(BjarkiContext)

    const HOTEL_TYPES: string[] = [
        'Family Hotel',
        'Villa',
        'Entire Home',
        'Beach Area',
    ]

    const doubleHotels = store.hotels.concat(store.hotels)

    const hotelsTitle: string = tr(TRANSLATE_KEYS.HOTELS, store.currentLanguage)

    const typeTitle: string = tr(TRANSLATE_KEYS.TYPE, store.currentLanguage)

    const availableTitle: string = tr(
        TRANSLATE_KEYS.AVAILABLE,
        store.currentLanguage,
    )

    const travellersTitle: string = tr(
        TRANSLATE_KEYS.TRAVELLERS,
        store.currentLanguage,
    )

    const hotelPriceTitle: string = tr(
        TRANSLATE_KEYS.PER_NIGHT,
        store.currentLanguage,
    )

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
                                {doubleHotels.length} {hotelsTitle}
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
                                        {HOTEL_TYPES.map(type => {
                                            return <option value={type} />
                                        })}
                                    </datalist>
                                </StyledAdventureOption>
                            </div>
                        </StyledAvailableInfo>
                        <StyledAdventuresList>
                            {doubleHotels.map(adventure => {
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
                                        priceDescription={hotelPriceTitle}
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

export { HotelListPage }
