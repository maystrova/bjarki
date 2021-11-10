import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ADVENTURE_ALIAS } from 'adventures/adventures'

import { StyledAdventurePage } from './style'
import { BjarkiContext } from 'context/storeContext'

interface AdventurePageProps {}

const AdventurePage = ({}: AdventurePageProps) => {
    const { store } = useContext(BjarkiContext)

    const [adventure, setAdventure] = useState<string>(
        ADVENTURE_ALIAS.YOGA_RETREAT,
    )

    let params = useParams<{ alias: string }>()

    const getAdventureFromStore = (): void => {
        let currentAdventure = store.adventures.find(
            adventure => adventure.alias === params.alias,
        )
        if (currentAdventure) {
            setAdventure(currentAdventure.alias)
        }
        return undefined
    }

    useEffect(() => {
        getAdventureFromStore()
    }, [])

    return (
        <StyledAdventurePage alias={adventure}>
            <h1>{adventure}</h1>
        </StyledAdventurePage>
    )
}

export { AdventurePage }
