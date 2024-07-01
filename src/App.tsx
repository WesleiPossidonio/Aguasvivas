import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { Home } from "./Pages/Home/Index"
import { GlobalStyled } from "./styles/theme/globalStyles"

function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <Home />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
