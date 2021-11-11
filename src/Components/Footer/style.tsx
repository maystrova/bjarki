import styled from 'styled-components'

const StyledFooter = styled.div`
    height: 322px;
    background-color: rgba(56, 56, 56, 1);
    padding: 0 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledSocialMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
`

export { StyledFooter, StyledSocialMedia }
