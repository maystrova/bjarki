import styled from 'styled-components'

const StyledHomePage = styled.div`
    //background-image: url(./pics/monte-rosa-bg.jpg);
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
    //position: absolute;
    //bottom: 0;
    //right: 0;
    box-shadow: 1px 1px rgba(63, 63, 63, 0.1);
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

export {
    StyledHomePage,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledHomePageFooter,
    StyledScroll,
    StyledScrollButton,
    StyledSearchActions,
}
