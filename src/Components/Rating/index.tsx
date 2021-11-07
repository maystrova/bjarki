import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledRating, StyledRatingValue, StyledReviewsCount } from './style'

import ratingIcon from './pics/rating-icon.svg'

interface RatingProps {
    rating: number
    reviewsCount: number
}

const Rating = ({ rating, reviewsCount }: RatingProps) => {
    return (
        <StyledRating>
            <Icon size={ICON_SIZE.XXX_SMALL} src={ratingIcon} />
            <StyledRatingValue>{rating}</StyledRatingValue>
            <StyledReviewsCount>({reviewsCount})</StyledReviewsCount>
        </StyledRating>
    )
}

export { Rating }
