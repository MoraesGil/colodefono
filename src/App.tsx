import { ThemeProvider } from 'styled-components'
import theme from './theme'
import LinkButton from './components/LinkButton'

function App() {
  return (
    <ThemeProvider theme={theme}>
     <div></div>
    </ThemeProvider>
  );
}

export default App;
