import React from 'react'
import { StyledHotelCard } from './style'

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
            </div>
            <div>{location}</div>
            <div>{title}</div>
            <div>${price} per night</div>
        </StyledHotelCard>
    )
}

export { HotelCard }
