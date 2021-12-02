import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { tr } from 'services/language'

import { AdditionalDiscoverInfo } from 'Components/AdditionalDiscoverInfo'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledExploreListHeader } from './style'

import viewAll from 'Pages/HomePage/pics/black-arrow.svg'

interface ExploreListProps {
    title: string
    list: React.ReactChild
    onViewAllClick: () => void
}

const ExploreList = ({ title, list, onViewAllClick }: ExploreListProps) => {
    const { store } = useContext(BjarkiContext)

    const viewAllTitle = tr('view-all', store.currentLanguage)

    return (
        <div>
            <StyledExploreListHeader>
                <AdditionalDiscoverInfo title={title} />
                <div>
                    <button onClick={onViewAllClick}>
                        {viewAllTitle}
                        <Icon size={ICON_SIZE.XX_SMALL} src={viewAll} />
                    </button>
                </div>
            </StyledExploreListHeader>
            <div>{list}</div>
        </div>
    )
}

export { ExploreList }
