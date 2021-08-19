import styled from 'styled-components'

const StyledHomePage = styled.div`
    background: no-repeat url('../../destinations/pics/monta-rosa-bg.png');
    background: black;
    color: #fff;
    padding: 30px 85px;
    height: 100vh;
`

const StyledHomePageHeaderLogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledHomePageHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
`

const StyledHomePageContainer = styled.div``

const StyledDestinationInfo = styled.div``
const StyledDiscover = styled.div`
    width: 96px;

    & a {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 16px;
        text-decoration: none;
        color: #fff;
        border-bottom: 1.5px solid #fff;
    }
`

const StyledWeather = styled.div`
    width: 114px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledCity = styled.h1`
    font-size: 80px;
`

const StyledCountry = styled.div`
    font-size: 14px;
`

const StyledDate = styled.div``

export {
    StyledHomePage,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledHomePageContainer,
    StyledDestinationInfo,
    StyledDiscover,
    StyledWeather,
    StyledCity,
    StyledCountry,
    StyledDate,
}
