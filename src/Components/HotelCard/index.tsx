import React from 'react'
import {
    StyledHotelCard,
    StyledHotelCardLocation,
    StyledHotelCardPrice,
} from './style'

interface HotelCardProps {
    image: string
    title: string
    location: string
    price: number
}

const HotelCard = ({ image, title, location, price }: HotelCardProps) => {
    return (
        <StyledHotelCard>
            <div>
                <img src={image} alt='img' />
            </div>{' '}
            <StyledHotelCardLocation>{location}</StyledHotelCardLocation>
            <div>{title}</div>
            <StyledHotelCardPrice>
                ${price} <span>per night</span>
            </StyledHotelCardPrice>
        </StyledHotelCard>
    )
}

export { HotelCard }
