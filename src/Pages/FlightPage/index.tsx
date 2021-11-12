import React from 'react'

import { StyledFlightPage } from './style'
import { StyledContainer } from 'Components/Layout/style'

interface FlightPageProps {}

const FlightPage = ({}: FlightPageProps) => {
    return (
        <StyledFlightPage>
            <StyledContainer>
                <h1>Search hundreds of flight tickets at once.</h1>
            </StyledContainer>
        </StyledFlightPage>
    )
}

export { FlightPage }
