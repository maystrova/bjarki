import styled from 'styled-components'

const StyledExploreCard = styled.div`
    width: 350px;
    height: 104px;
    border-radius: 4px;
    padding: 10px 16px;
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    align-items: center;
`

const StyledExploreCardImage = styled.img`
    width: 144px;
    border-radius: 4px;
`

const StyledExploreCardInfo = styled.div`
    line-height: 2;
`

const StyledExploreCardFurther = styled.div`
    color: rgba(252, 69, 0, 1);
    display: flex;
    font-size: 13px;
`

const StyledExploreLink = styled.a`
    color: inherit;
    text-decoration: none;
`

export {
    StyledExploreCard,
    StyledExploreCardImage,
    StyledExploreCardFurther,
    StyledExploreCardInfo,
    StyledExploreLink,
}
