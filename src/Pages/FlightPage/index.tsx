import React from 'react'

import { StyledFlightPage } from './style'
import { StyledContainer } from 'Components/Layout/style'
import { Header, HEADER_TYPE } from 'Components/Header'

import arrow from 'Components/Header/pics/arrow.svg'

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
            <StyledContainer>
                <h1>Search hundreds of flight tickets at once.</h1>
            </StyledContainer>
        </StyledFlightPage>
    )
}

export { FlightPage }
