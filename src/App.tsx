import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import CertificatesPage from "./screens/CertificatesPage";

export const baseUrl = "/colodefono";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={baseUrl + "/"} element={<HomePage />} />
          <Route
            path={baseUrl + "/certificates/:id"}
            element={<CertificatesPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
