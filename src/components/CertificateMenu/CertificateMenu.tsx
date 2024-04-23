// import { BackButton, Container } from "./CertificateMenu.styles";
import { Link } from "react-router-dom";
import "./ResponsiveMenu.css";
import React, { useState } from "react";

interface CertificateMenuProps {
  onSelect: (id: number) => void;
  lengthArray: number;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({ onSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <img className="img" src="./src/assets/avatar/avatarFono.jpg" />
        </div>

        <div className={`nav-list ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-item">
              <a onClick={() => onSelect(1)} className="nav-link">
                Certificado 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Certificado 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Certificado 3</a>
            </li>
          </ul>
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
        <ul>
          <li className="nav-item">
            <a className="nav-link">Certificado 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Certificado 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Certificado 3</a>
          </li>
        </ul>

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
