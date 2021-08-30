import styled from 'styled-components'

const StyledDestination = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    text-shadow: 0.5px 0.5px 0.5px black;
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

export {
    StyledDestination,
    StyledDestinationInfo,
    StyledDiscover,
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDay,
    StyledMonth,
    StyledExplore,
    StyledDestinationTitle,
    StyledExploreButton,
}
