import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  BackButton,
  Container,
  Logo,
  MobileMenu,
  MobileMenuIcon,
  NavBar,
  NavList,
  NextButton,
} from "./CertificateMenu.styles";

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
    if (currentCertificate === 0) {
      const prevCertificate =
        ((currentCertificate - 1 + certificateCount) % certificateCount) + 1;

      setCurrentCertificate(prevCertificate);
      onSelect(prevCertificate);
    }

    if (currentCertificate > 0) {
      const prevCertificate =
        ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;

      setCurrentCertificate(prevCertificate);
      onSelect(prevCertificate);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <NavBar>
        <Logo>
          <img
            className="img"
            src="./src/assets/avatar/avatarFono.jpg"
            alt="Logotipo"
          />
        </Logo>

        <NavList>
          {!menuOpen && (
            <div>
              <NextButton onClick={handlePrevious}>Anterior</NextButton>
              <span style={{ padding: "0 1rem" }}>
                Certificado {currentCertificate}
              </span>
              <NextButton onClick={handleNext}>Próximo</NextButton>
            </div>
          )}
        </NavList>

        <BackButton className={`${menuOpen ? "open" : ""}`}>
          <Link to={"/"}>Voltar</Link>
        </BackButton>

        <MobileMenuIcon>
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
        </MobileMenuIcon>
      </NavBar>

      <MobileMenu className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NextButton onClick={handlePrevious}>Anterior</NextButton>

          <span style={{ padding: "0 1rem" }}>
            Certificado {currentCertificate}
          </span>

          <NextButton onClick={handleNext}>Próximo</NextButton>
        </div>

        <BackButton>
          <Link to={"/"}>Voltar</Link>
        </BackButton>
      </MobileMenu>
    </Container>
  );
};

export default CertificateMenu;
