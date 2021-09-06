import styled from 'styled-components'

import defaultBackground from 'Pages/DiscoverPage/pics/discover-page.jpg'

const StyledDiscoverPage = styled.div`
    color: #fff;
    background: no-repeat url(${defaultBackground});
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledDiscoverPageCountryList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    overflow: hidden;
    overflow-x: scroll;
`

export { StyledDiscoverPage, StyledDiscoverPageCountryList }
