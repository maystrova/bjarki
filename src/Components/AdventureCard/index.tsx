import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={ROUTES.DISCOVER_PAGE}>
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
            </Link>
        </StyledAdventureCard>
    )
}

export { AdventureCard }
