import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ADVENTURE_ALIAS, ADVENTURE_TITLE } from 'adventures/adventures'

import { StyledAdventurePage } from './style'
import { BjarkiContext } from 'context/storeContext'
import { AdventuresType } from 'services/type'

interface AdventurePageProps {}

const AdventurePage = ({}: AdventurePageProps) => {
    const { store } = useContext(BjarkiContext)

    const [adventure, setAdventure] = useState<AdventuresType>({
        title: ADVENTURE_TITLE.YOGA_RETREAT,
        alias: ADVENTURE_ALIAS.YOGA_RETREAT,
    })

    let params = useParams<{ alias: string }>()

    const getAdventureFromStore = () => {
        let currentAdventure = store.adventures.find(
            adventure => adventure.alias === params.alias,
        )
        if (currentAdventure) {
            setAdventure(currentAdventure)
        }
    }

    useEffect(() => {
        getAdventureFromStore()
    }, [])

    return (
        <StyledAdventurePage alias={adventure.alias}>
            <h1>{adventure.title}</h1>
        </StyledAdventurePage>
    )
}

export { AdventurePage }
