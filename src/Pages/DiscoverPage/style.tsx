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
    //display: grid;
    //grid-template-columns: repeat(4, 1fr);
    //grid-column-gap: 40px;
    //white-space: nowrap;
    ////display: flex;
    //overflow-x: scroll;
    //max-width: content-box;
    //align-items: center;
    //overflow-y: hidden;
    //-webkit-overflow-scrolling: touch;
    //max-width: fit-content;
    //flex-wrap: nowrap;
    //overflow-x: auto;
`

export { StyledDiscoverPage, StyledDiscoverPageCountryList }
