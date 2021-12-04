import styled from 'styled-components'

import himalayas from './pics/himalayas.jpg'

const StyledFlightPage = styled.div`
    background: no-repeat url(${himalayas});
    background-size: cover;
    padding: 0 85px;
    color: #fff;
    height: 100vh;
    display: grid;
    grid-template-rows: 10% 90%;
`

const StyledFlightPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export { StyledFlightPage, StyledFlightPageContainer }
