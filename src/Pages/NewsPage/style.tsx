import styled from 'styled-components'

const StyledNewsPage = styled.div`
    padding: 100px 85px;
    display: flex;
    justify-content: space-between;
`

const StyledNewsPageContainer = styled.div`
    max-width: 750px;
    display: grid;
    grid-row-gap: 50px;
`

const StyledNewsPageTitle = styled.h1`
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
`

const StyledNewsPageNews = styled.div`
    font-size: 14px;
    width: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    & :first-child {
        color: rgba(252, 69, 0, 1);
    }
`

const StyledNewsPageImage = styled.img`
    width: 100%;
`

export {
    StyledNewsPage,
    StyledNewsPageContainer,
    StyledNewsPageNews,
    StyledNewsPageTitle,
    StyledNewsPageImage,
}
