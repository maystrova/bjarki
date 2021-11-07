import styled from 'styled-components'

const StyledRating = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
`

const StyledRatingValue = styled.div`
    color: rgba(252, 69, 0, 1);
    font-weight: 700;
    margin-right: 5px;
`

const StyledReviewsCount = styled.div`
    color: rgba(100, 100, 100, 1);
`

export { StyledRating, StyledRatingValue, StyledReviewsCount }
