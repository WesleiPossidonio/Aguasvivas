import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/theme/default'
import { GlobalStyled } from './styles/theme/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes'
import { HeaderLinks, HeaderMenu } from './Components'
import { Header } from './Pages/Home/styled'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <Header>
          <HeaderLinks />
          <HeaderMenu />
        </Header>
        <Router />
        <GlobalStyled />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
