import { ThemeProvider } from 'styled-components'
import './App.css'
import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  )
}

export default App
