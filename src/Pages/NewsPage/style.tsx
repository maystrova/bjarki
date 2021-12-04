import styled, { css } from 'styled-components'

export enum NEWS_TYPE {
    MAIN = 'MAIN',
    DESCRIPTION = 'DESCRIPTION',
    QUOTE = 'QUOTE',
}

interface StyledNewsProps {
    type: NEWS_TYPE
}

const StyledNewsPage = styled.div`
    display: grid;
    grid-row-gap: 50px;
    padding: 0 85px;
`

const StyledNewsPageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
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

const StyledNewsCaption = styled.div`
    font-size: 14px;
    margin-bottom: 12px;

    & :first-child {
        color: rgba(252, 69, 0, 1);
    }
`

const StyledNewsPageImage = styled.img`
    width: 750px;
    margin-bottom: 12px;
`

const StyledNews = styled.div`
    max-width: 560px;
    padding: 0 20px;
    display: grid;
    grid-row-gap: 25px;
`

const StyledNewsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledMainNews = styled.div`
    line-height: 1.5;

    ${(props: StyledNewsProps) =>
        props.type === NEWS_TYPE.MAIN &&
        css`
            font-size: 18px;
            color: rgba(56, 56, 56, 1);
        `}

    ${(props: StyledNewsProps) =>
        props.type === NEWS_TYPE.DESCRIPTION &&
        css`
            font-size: 16px;
            color: rgba(100, 100, 100, 1);
        `}

    ${(props: StyledNewsProps) =>
        props.type === NEWS_TYPE.QUOTE &&
        css`
            font-size: 22px;
            color: rgba(56, 56, 56, 1);
        `}
`

const StyledInvertedCommas = styled.span`
    font-size: 72px;
    color: rgba(252, 69, 0, 1);
`

export {
    StyledNewsPage,
    StyledNewsPageContainer,
    StyledNewsCaption,
    StyledNewsPageTitle,
    StyledNewsPageImage,
    StyledNews,
    StyledNewsSection,
    StyledMainNews,
    StyledInvertedCommas,
    StyledNewsPageWrapper,
}
