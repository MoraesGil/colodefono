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
  onSelect: (id: number) => void;
  lengthArray: number;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({
  onSelect,
  lengthArray,
}) => {
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

  return (
    <Container>
      <NavBar>
        <Logo className="pd10">Colo de Fono</Logo>

        <NavList>
          
            <FaCircleArrowLeft onClick={handlePrevious} size={25} />

         
              <span>
                Certificado {currentCertificate}
              </span>
            

            <FaCircleArrowRight onClick={handleNext} size={25} />
         
        </NavList>

        <BackButton>
          <Link to={"/"}>Voltar</Link>
        </BackButton>
      </NavBar>
    </Container>
  );
};

export default CertificateMenu;
