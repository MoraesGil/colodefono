import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./ResponsiveMenu.css";

interface CertificateMenuProps {
  onSelect: (id: number) => void;
  lengthArray: number;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({
  onSelect,
  lengthArray,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const certificateCount = lengthArray;

  const handleNext = () => {
    const nextCertificate = (currentCertificate % certificateCount) + 1;
    setCurrentCertificate(nextCertificate);
    onSelect(nextCertificate);
  };

  const handlePrevious = () => {
    const prevCertificate =
      ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;
    setCurrentCertificate(prevCertificate);
    onSelect(prevCertificate);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <img
            className="img"
            src="./src/assets/avatar/avatarFono.jpg"
            alt="Logo"
          />
        </div>

        <div className={`nav-list`}>
          {!menuOpen && (
            <div>
              <button
                style={{
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#0187a7",
                }}
                onClick={handlePrevious}
              >
                Anterior
              </button>
              <span style={{ padding: "0 1rem" }}>
                Certificado {currentCertificate}
              </span>
              <button
                style={{
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#0187a7",
                }}
                onClick={handleNext}
              >
                Próximo
              </button>
            </div>
          )}
        </div>

        <div className={`login-button ${menuOpen ? "open" : ""}`}>
          <button>
            <Link to={"/"}>Voltar</Link>
          </button>
        </div>

        <div className="mobile-menu-icon">
          <button onClick={toggleMenu}>
            <img
              className="icon"
              src={
                menuOpen
                  ? "./src/assets/svg/close_white_36dp.svg"
                  : "./src/assets/svg/menu_white_36dp.svg"
              }
              alt="Menu"
            />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0187a7",
            }}
            onClick={handlePrevious}
          >
            Anterior
          </button>
          <span style={{ padding: "0 1rem" }}>
            Certificado {currentCertificate}
          </span>
          <button
            style={{
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0187a7",
            }}
            onClick={handleNext}
          >
            Próximo
          </button>
        </div>

        <div className="login-button">
          <button>
            <Link to={"/"}>Voltar</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CertificateMenu;
