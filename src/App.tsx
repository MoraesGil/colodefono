import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import CertificatePage from "./screens/CertificatePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificates" element={<CertificatePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
