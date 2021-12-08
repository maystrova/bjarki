import styled from 'styled-components'

const StyledExploreListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    & button {
        background: transparent;
        border: none;
        font-size: 14px;
        border-bottom: 1px solid rgba(252, 69, 0, 1);
        padding: 3px;
        display: flex;
        align-items: center;
    }
`

const StyledExploreList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export { StyledExploreListHeader, StyledExploreList }
