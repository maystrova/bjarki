import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledExploreCard,
    StyledExploreCardFurther,
    StyledExploreCardImage,
    StyledExploreCardInfo,
    StyledExploreLink,
} from './style'

import exploreIcon from 'Components/ExploreCard/pics/red-arrow.svg'

interface ExploreCardProps {
    title: string
    image: string
}

const ExploreCard = ({ title, image }: ExploreCardProps) => {
    return (
        <StyledExploreCard>
            <div>
                <StyledExploreCardImage src={image} alt='img' />
            </div>
            <StyledExploreCardInfo>
                <div>{title}</div>
                <StyledExploreCardFurther>
                    <StyledExploreLink href='https://booking.com'>
                        <span>Explore</span>
                    </StyledExploreLink>
                    <Icon size={ICON_SIZE.XX_SMALL} src={exploreIcon} />
                </StyledExploreCardFurther>
            </StyledExploreCardInfo>
        </StyledExploreCard>
    )
}

export { ExploreCard }
