import React from 'react'
import { useHistory } from 'react-router-dom'

import { ADVENTURE_ALIAS, ADVENTURE_TITLE } from 'adventures/adventures'
import { ROUTES } from 'services/route'

import { Rating } from 'Components/Rating'

import {
    StyledAdventureCard,
    StyledAdventureCardAdditionalInfo,
    StyledAdventureCardLocation,
    StyledAdventureCardPrice,
} from './style'

interface AdventureCardProps {
    image: string
    title: string
    location: string
    price: number
    priceDescription: string
    rating: number
    reviewsCount: number
    onCardClick: () => void
}

const AdventureCard = ({
    image,
    title,
    location,
    price,
    priceDescription,
    rating,
    reviewsCount,
    onCardClick,
}: AdventureCardProps) => {
    const history = useHistory()

    const goToAdventurePage = (title: string) => {
        switch (title) {
            case ADVENTURE_TITLE.YOGA_RETREAT:
                return history.push(
                    `/adventure/${ADVENTURE_ALIAS.YOGA_RETREAT}`,
                )
            case ADVENTURE_TITLE.EXPLORE_THE_NORTH:
                return history.push(
                    `/adventure/${ADVENTURE_ALIAS.EXPLORE_THE_NORTH}`,
                )
            case ADVENTURE_TITLE.SCUBA_DIVING:
                return history.push(
                    `/adventure/${ADVENTURE_ALIAS.SCUBA_DIVING}`,
                )
            case ADVENTURE_TITLE.CAMEL_RIDE:
                return history.push(`/adventure/${ADVENTURE_ALIAS.CAMEL_RIDE}`)
            default:
                history.push(ROUTES.ADVENTURES_LIST_PAGE)
        }
    }

    return (
        <StyledAdventureCard onClick={() => onCardClick()}>
            <div>
                <img src={image} alt='img' />
            </div>
            <StyledAdventureCardLocation>
                {location}
            </StyledAdventureCardLocation>
            <div>{title}</div>
            <StyledAdventureCardAdditionalInfo>
                <StyledAdventureCardPrice>
                    ${price} <span>{priceDescription}</span>
                </StyledAdventureCardPrice>
                <Rating rating={rating} reviewsCount={reviewsCount} />
            </StyledAdventureCardAdditionalInfo>
        </StyledAdventureCard>
    )
}

export { AdventureCard }
