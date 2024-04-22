import { ThemeProvider } from 'styled-components'
import theme from './theme'
import LinksPage from './screens/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <LinksPage />
    </ThemeProvider>
  );
}

export default App;
