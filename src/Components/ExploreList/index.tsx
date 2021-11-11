import React from 'react'

import { AdditionalDiscoverInfo } from 'Components/AdditionalDiscoverInfo'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledExploreList, StyledExploreListHeader } from './style'

import viewAll from 'Pages/HomePage/pics/black-arrow.svg'

interface ExploreListProps {
    title: string
    list: React.ReactChild
    onViewAllClick: () => void
}

const ExploreList = ({ title, list, onViewAllClick }: ExploreListProps) => {
    return (
        <div>
            <StyledExploreListHeader>
                <AdditionalDiscoverInfo title={title} />
                <div>
                    <button onClick={onViewAllClick}>
                        View All{' '}
                        <Icon size={ICON_SIZE.XX_SMALL} src={viewAll} />
                    </button>
                </div>
            </StyledExploreListHeader>
            <div>{list}</div>
        </div>
    )
}

export { ExploreList }
