import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    padding: 0 85px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
`

const StyledLogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export { StyledHeader, StyledLogo }
