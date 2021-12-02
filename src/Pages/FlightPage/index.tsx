import React from 'react'

import { StyledFlightPage, StyledFlightPageContainer } from './style'
import { Header, HEADER_TYPE } from 'Components/Header'

interface FlightPageProps {
    onLogInClicked: () => void
}

const FlightPage = ({ onLogInClicked }: FlightPageProps) => {
    return (
        <StyledFlightPage>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.WHITE}
            />
            <StyledFlightPageContainer>
                <h1>Search hundreds of flight tickets at once.</h1>
            </StyledFlightPageContainer>
        </StyledFlightPage>
    )
}

export { FlightPage }
