import React from 'react'
import {
    StyledAdventureCard,
    StyledAdventureCardLocation,
    StyledAdventureCardPrice,
} from './style'

interface AdventureCardProps {
    image: string
    title: string
    location: string
    price: number
    priceDescription: string
}

const AdventureCard = ({
    image,
    title,
    location,
    price,
    priceDescription,
}: AdventureCardProps) => {
    return (
        <StyledAdventureCard>
            <div>
                <img src={image} alt='img' />
            </div>{' '}
            <StyledAdventureCardLocation>
                {location}
            </StyledAdventureCardLocation>
            <div>{title}</div>
            <StyledAdventureCardPrice>
                ${price} <span>{priceDescription}</span>
            </StyledAdventureCardPrice>
        </StyledAdventureCard>
    )
}

export { AdventureCard }
