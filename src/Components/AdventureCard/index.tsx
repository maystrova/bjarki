import React from 'react'

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
