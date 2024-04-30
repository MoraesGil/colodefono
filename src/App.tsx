import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import CertificatesPage from "./screens/CertificatesPage";

function App() {
  const baseUrl = "/colodefono";

  return (
    <ThemeProvider theme={theme}>
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificates/:id" element={<CertificatesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
