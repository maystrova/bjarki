import styled from 'styled-components'

const StyledExploreListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export { StyledExploreListHeader, StyledExploreList }
