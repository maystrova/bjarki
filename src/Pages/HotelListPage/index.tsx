import React from 'react'

import { Header, HEADER_TYPE } from 'Components/Header'

import { StyledAdventuresListContainer } from 'Pages/AdventuresListPage/style'
import { StyledHotelListPage } from './style'

interface HotelListPageProps {
    onLogInClicked: () => void
}

const HotelListPage = ({ onLogInClicked }: HotelListPageProps) => {
    return (
        <StyledHotelListPage>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.BLACK}
            />
            <StyledAdventuresListContainer></StyledAdventuresListContainer>
        </StyledHotelListPage>
    )
}

export { HotelListPage }
