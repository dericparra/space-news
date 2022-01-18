import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*, input, button {
  font-family: 'Roboto Condensed', sans-serif;
}  

body {
    display: flex;
    width:100%;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
