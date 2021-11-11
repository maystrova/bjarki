import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledExploreCard,
    StyledExploreCardFurther,
    StyledExploreCardImage,
    StyledExploreCardInfo,
} from './style'

import exploreIcon from 'Components/ExploreCard/pics/red-arrow.svg'

interface ExploreCardProps {
    title: string
    image: string
    onCardClick: () => void
}

const ExploreCard = ({ title, onCardClick, image }: ExploreCardProps) => {
    return (
        <StyledExploreCard onClick={onCardClick}>
            <div>
                <StyledExploreCardImage src={image} alt='img' />
            </div>
            <StyledExploreCardInfo>
                <div>{title}</div>
                <StyledExploreCardFurther>
                    <span>Explore</span>
                    <Icon size={ICON_SIZE.XX_SMALL} src={exploreIcon} />
                </StyledExploreCardFurther>
            </StyledExploreCardInfo>
        </StyledExploreCard>
    )
}

export { ExploreCard }
