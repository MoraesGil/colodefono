import { Link, useNavigate } from "react-router-dom";
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
  const [currentCertificate, setCurrentCertificate] = useState(1);
  const navigate = useNavigate();

  const certificateCount = lengthArray;

  const handleNextCertificate = () => {
    const next = (currentCertificate % certificateCount) + 1;
    setCurrentCertificate(next);
    navigate(`/certificate/${next}`);
  };

  const handlePreviousCertificate = () => {
    const previous =
      ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;
    setCurrentCertificate(previous);
    navigate(`/certificate/${previous}`);
  };

  return (
    <Container>
      <NavBar>
        <Logo className="pd10">Colo de Fono</Logo>

        <NavList>
          <a onClick={handlePreviousCertificate}>
            <FaCircleArrowLeft size={25} />
          </a>

          <span>Certificado {currentCertificate}</span>

          <a onClick={handleNextCertificate}>
            <FaCircleArrowRight size={25} />
          </a>
        </NavList>

        <BackButton>
          <Link to="/">Voltar</Link>
        </BackButton>
      </NavBar>
    </Container>
  );
};

export default CertificateMenu;
