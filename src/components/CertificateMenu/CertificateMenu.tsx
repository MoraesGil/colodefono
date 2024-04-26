import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  BackButtonSide,
  CarouselContainer,
  CarouselContent,
  CarouselText,
  Content,
  Logo,
  MenuItem,
  MenuList,
  SidebarContainer,
  TopContent,
} from "./CertificateMenu.styles";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { certificateImages } from "../../screens/CertificatesPage/CertificatePaths";

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

  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handlePreviousCertificate();
    }

    if (event.key === "ArrowRight") {
      handleNextCertificate();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <>
      <SidebarContainer>
        <div>
          <h2>Certificados</h2>
          <MenuList>
            {Object.keys(certificateImages).map((category, index) => {
              return (
                <Link
                  to={`/certificate/${index + 1}`}
                  onClick={() => setCurrentCertificate(index + 1)}
                >
                  <MenuItem
                    key={category}
                    className={currentCertificate === index + 1 ? "active" : ""}
                  >
                    {category}
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
        </div>
        <Link to="/">
          <BackButtonSide>Voltar</BackButtonSide>
        </Link>
      </SidebarContainer>

      <CarouselContainer>
        <Content>
          <TopContent>
            <Logo>
              <Link to="/">Colo de Fono</Link>
            </Logo>
            <BackButton>
              <Link to="/">Voltar</Link>
            </BackButton>
          </TopContent>
          <CarouselContent>
            <a
              onClick={handlePreviousCertificate}
              className={currentCertificate === 1 ? "displayNone" : ""}
            >
              <FaCircleArrowLeft size={25} />
            </a>
            <CarouselText>{label}</CarouselText>
            <a
              onClick={handleNextCertificate}
              className={
                currentCertificate === certificateCount ? "displayNone" : ""
              }
            >
              <FaCircleArrowRight size={25} />
            </a>
          </CarouselContent>
        </Content>
      </CarouselContainer>
    </>
  );
};

export default CertificateMenu;
