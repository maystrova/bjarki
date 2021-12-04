import styled from 'styled-components'

const StyledAdventuresListPage = styled.div`
    display: grid;
    grid-template-rows: 150px;
    padding: 0 85px;
`

const StyledAdventuresListWrapper = styled.div`
    padding: 0 85px;
`

const StyledAdventuresListContainer = styled.div`
    max-width: 1200px;
    display: grid;
    grid-row-gap: 50px;
`

const StyledAvailableInfo = styled.div`
    font-size: 20px;
    display: grid;
    grid-row-gap: 50px;

    & span {
        color: rgba(100, 100, 100, 1);
    }
`

const StyledAdventureOption = styled.label`
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 4px;
    padding: 9px 9px;
    margin-right: 10px;

    & input {
        border: none;
        outline: none;
    }
`

const StyledAdventureFilter = styled.div`
    display: flex;
    align-items: center;
`

export {
    StyledAdventuresListPage,
    StyledAvailableInfo,
    StyledAdventureOption,
    StyledAdventureFilter,
    StyledAdventuresListContainer,
    StyledAdventuresListWrapper,
}
