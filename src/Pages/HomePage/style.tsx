import styled from 'styled-components'

const StyledHomePage = styled.div`
    //background-image: url(./pics/monte-rosa-bg.jpg);
    background-color: gray;
    color: #fff;
    padding: 30px 85px;
    height: 150vh;
    display: grid;
    grid-row-gap: 180px;
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

const StyledHomePageContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
`

const StyledDestinationInfo = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    line-height: 1.5;
`
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

const StyledDestinationTitle = styled.div`
    display: flex;
`

const StyledCity = styled.h1`
    font-size: 80px;
`

const StyledCountry = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
`

const StyledDate = styled.div`
    display: flex;
`

const StyledDay = styled.span`
    font-size: 24px;
    margin-right: 3px;
`

const StyledMonth = styled.span`
    font-size: 10px;
    opacity: 0.8;
`

const StyledExplore = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const StyledExploreButton = styled.button`
    background: transparent;
    border: none;
`
const StyledHomePageFooter = styled.div`
    display: grid;
    grid-template-columns: 100px 100%;
    height: 72px;
`

const StyledScroll = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledScrollTitle = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
`

const StyledScrollButton = styled.button`
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`


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
    StyledDay,
    StyledMonth,
    StyledExplore,
    StyledDestinationTitle,
    StyledExploreButton,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollButton,
    StyledScrollTitle,
}
