import styled from 'styled-components'

import himalayas from './pics/himalayas.jpg'

const StyledFlightPage = styled.div`
    height: 100vh;
    background: no-repeat url(${himalayas});
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { StyledFlightPage }
