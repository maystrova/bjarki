import styled from 'styled-components'

const StyledHomePage = styled.div`
    background: no-repeat url('../../destinations/pics/monta-rosa-bg.png');
    background: black;
`

const StyledHomePageHeaderLogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledHomePageHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 85px;
`

export { StyledHomePage, StyledHomePageHeader, StyledHomePageHeaderLogo }
