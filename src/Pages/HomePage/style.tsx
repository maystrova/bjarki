import styled from 'styled-components'

import monteRosa from './pics/monte-rosa.jpg'

const StyledHomePage = styled.div`
    background: no-repeat url(${monteRosa});
  background-size: cover;
    background-color: gray;
    color: #fff;
    padding: 30px 85px;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    position: relative;
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

const StyledHomePageFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 11fr;
    height: 72px;
`

const StyledScroll = styled.div`
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

const StyledSearchActions = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 85px;
    display: grid;
    grid-template-columns: 1fr 11fr;
`

const StyledScrollArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export {
    StyledHomePage,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollButton,
    StyledSearchActions,
    StyledScrollArea,
}
