import React from 'react'

import { StyledHotelListPage } from './style'
import { StyledAdventuresListContainer } from 'Pages/AdventuresListPage/style'

interface HotelListPageProps {}

const HotelListPage = ({}: HotelListPageProps) => {
    return (
        <StyledHotelListPage>
            <StyledAdventuresListContainer></StyledAdventuresListContainer>
        </StyledHotelListPage>
    )
}

export { HotelListPage }
