import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  }
`

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
