import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import CertificatesPage from "./screens/CertificatesPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificate/:id" element={<CertificatesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
