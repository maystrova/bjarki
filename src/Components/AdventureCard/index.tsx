import React from 'react'
import {
    StyledAdventureCard,
    StyledAdventureCardAdditionalInfo,
    StyledAdventureCardLocation,
    StyledAdventureCardPrice,
} from './style'
import { Rating } from '../Rating'

interface AdventureCardProps {
    image: string
    title: string
    location: string
    price: number
    priceDescription: string
    rating: number
    reviewsCount: number
}

const AdventureCard = ({
    image,
    title,
    location,
    price,
    priceDescription,
    rating,
    reviewsCount,
}: AdventureCardProps) => {
    return (
        <StyledAdventureCard>
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
