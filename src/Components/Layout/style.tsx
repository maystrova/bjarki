import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
  }
`

const StyledLayout = styled.div`
    margin: 0 auto;
    position: relative;

    & button {
        cursor: pointer;
        outline: none;
    }
`

export { StyledLayout, GlobalStyle }
