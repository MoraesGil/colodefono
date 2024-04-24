import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  BackButton,
  Container,
  Logo,
  NavBar,
  NavList,
} from "./CertificateMenu.styles";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface CertificateMenuProps {
  lengthArray: number;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({ lengthArray }) => {
  const initialCertificate = 1;

  const [currentCertificate, setCurrentCertificate] =
    useState(initialCertificate);

  const certificateCount = lengthArray;

  const handleNextCertificate = () => {
    const next = (currentCertificate % certificateCount) + 1;
    setCurrentCertificate(next);
  };

  const handlePreviousCertificate = () => {
    const previous =
      ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;
    setCurrentCertificate(previous);
  };

  return (
    <Container>
      <NavBar>
        <Logo className="pd10">Colo de Fono</Logo>

        <NavList>
          <Link
            to={`/certificate/${currentCertificate}`}
            onClick={handlePreviousCertificate}
          >
            <FaCircleArrowLeft size={25} />
          </Link>

          <span>Certificado {currentCertificate}</span>

          <Link
            to={`/certificate/${currentCertificate}`}
            onClick={handleNextCertificate}
          >
            <FaCircleArrowRight size={25} />
          </Link>
        </NavList>

        <BackButton>
          <Link to="/">Voltar</Link>
        </BackButton>
      </NavBar>
    </Container>
  );
};

export default CertificateMenu;
