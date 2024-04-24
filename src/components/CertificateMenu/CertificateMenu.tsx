import { Link, useParams } from "react-router-dom";
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
  const { id } = useParams<{ id: string }>();
  const initialCertificate = parseInt(id || "1", 10);

  const [currentCertificate, setCurrentCertificate] =
    useState(initialCertificate);

  const certificateCount = lengthArray;

  const handleNext = () => {
    const nextCertificate = (currentCertificate % certificateCount) + 1;
    setCurrentCertificate(nextCertificate);
  };

  const handlePrevious = () => {
    const prevCertificate =
      ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;

    setCurrentCertificate(prevCertificate);
  };

  return (
    <Container>
      <NavBar>
        <Logo className="pd10">Colo de Fono</Logo>

        <NavList>
          <Link
            to={`/certificate/${currentCertificate}`}
            onClick={handlePrevious}
          >
            <FaCircleArrowLeft size={25} />
          </Link>

          <span>Certificado {currentCertificate}</span>

          <Link to={`/certificate/${currentCertificate}`} onClick={handleNext}>
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
