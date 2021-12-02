import styled from 'styled-components'

const StyledDestination = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    text-shadow: 0.5px 0.5px 0.5px black;
    padding: 0 85px;
`
const StyledDestinationInfo = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    line-height: 1.5;
`
const StyledDiscover = styled.div`
    display: flex;
    align-items: center;
`

const StyledDiscoverTitle = styled.div`
    margin-right: 5px;
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

export {
    StyledDestination,
    StyledDestinationInfo,
    StyledDiscover,
    StyledCity,
    StyledCountry,
    StyledDate,
    StyledDay,
    StyledMonth,
    StyledDestinationTitle,
    StyledDiscoverTitle,
}
