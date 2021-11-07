import styled from 'styled-components'

const StyledAdventuresListPage = styled.div`
    padding: 100px 85px;
    display: grid;
    grid-row-gap: 32px;
`

const StyledAvailableInfo = styled.div`
    font-size: 20px;
    display: grid;
    grid-row-gap: 20px;

    & span {
        color: rgba(100, 100, 100, 1);
    }
`

const StyledAdventureOption = styled.label`
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 4px;
    padding: 9px 6px;

    & input {
        border: none;
        outline: none;
    }
`

export { StyledAdventuresListPage, StyledAvailableInfo, StyledAdventureOption }
