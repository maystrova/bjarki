import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { tr } from 'services/language'

import { Header, HEADER_TYPE } from 'Components/Header'

import { StyledFlightPage, StyledFlightPageContainer } from './style'

interface FlightPageProps {
    onLogInClicked: () => void
}

const FlightPage = ({ onLogInClicked }: FlightPageProps) => {
    const { store } = useContext(BjarkiContext)

    const ticketsSearchTitle = tr(
        'Search hundreds of flight tickets at once.',
        store.currentLanguage,
    )

    return (
        <StyledFlightPage>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.WHITE}
            />
            <StyledFlightPageContainer>
                <h1>{ticketsSearchTitle}</h1>
            </StyledFlightPageContainer>
        </StyledFlightPage>
    )
}

export { FlightPage }
