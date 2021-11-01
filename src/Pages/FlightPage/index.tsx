import React from 'react'
import { StyledFlightPage } from './style'

interface FlightPageProps {}

const FlightPage = ({}: FlightPageProps) => {
    return (
        <StyledFlightPage>
            <h1>Search hundreds of flight tickets at once.</h1>
        </StyledFlightPage>
    )
}

export { FlightPage }
