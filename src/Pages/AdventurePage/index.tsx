import React from 'react'
import { StyledAdventurePage } from './style'
import { useParams } from 'react-router-dom'
import { ADVENTURE_ALIAS } from '../../adventures/adventures'

interface AdventurePageProps {}

const AdventurePage = ({}: AdventurePageProps) => {
    let params = useParams<{ alias: string }>()

    return (
        <StyledAdventurePage alias={ADVENTURE_ALIAS.YOGA_RETREAT}>
            Yoga retreat
        </StyledAdventurePage>
    )
}

export { AdventurePage }
