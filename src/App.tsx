import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/globalStyle";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Home />

    </ThemeProvider>

  )
}