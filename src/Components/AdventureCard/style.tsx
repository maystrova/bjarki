import styled from 'styled-components'

const StyledAdventureCard = styled.div`
    width: 255px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    line-height: 2;
    padding-bottom: 20px;

    & img {
        width: 255px;
    }
`

const StyledAdventureCardLocation = styled.div`
    font-size: 12px;
    color: rgba(100, 100, 100, 1);
`

const StyledAdventureCardPrice = styled.div`
    & span {
        color: rgba(100, 100, 100, 1);
        font-size: 14px;
    }
`

export {
    StyledAdventureCard,
    StyledAdventureCardLocation,
    StyledAdventureCardPrice,
}