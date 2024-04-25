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
  label: any;
  id: any;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({
  lengthArray,
  label,
  id,
}) => {
  const [currentCertificate, setCurrentCertificate] = useState(id);
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
        <Logo>
          <Link to="/">Colo de Fono</Link>
        </Logo>

        <NavList>
          <a onClick={handlePreviousCertificate} className={currentCertificate === 1 ? "displayNone" : ""}>
            <FaCircleArrowLeft size={25} />
          </a>

          <span>{label}</span>

          <a onClick={handleNextCertificate} className={currentCertificate === certificateCount ? "displayNone" : ""}>
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
