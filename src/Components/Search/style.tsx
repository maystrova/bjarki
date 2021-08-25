import styled from 'styled-components'

const StyledSearch = styled.div`
    height: 72px;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const StyledSearchAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledSearchItemTitle = styled.h5`
    color: rgba(100, 100, 100, 1);
    font-size: 11px;
`

const StyledSearchItem = styled.div`
    line-height: 2;
`

const StyledSearchInput = styled.label`
    display: flex;
    color: rgba(153, 153, 153, 1);
    align-items: center;

    & input {
        border: none;
        outline: none;
    }
`

export {
    StyledSearch,
    StyledSearchItem,
    StyledSearchInput,
    StyledSearchAction,
    StyledSearchItemTitle,
}
