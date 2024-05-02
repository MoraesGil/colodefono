import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  CarouselContainer,
  CarouselContent,
  CarouselText,
  Content,
  HandleContent,
  Logo,
  MenuItem,
  MenuList,
  SidebarContainer,
  TopContent,
} from "./CertificateMenu.styles";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface CertificateMenuProps {
  lengthArray: number;
  label: any;
  id: any;
  organizedCertificateKeys: string[];
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({
  lengthArray,
  label,
  id,
  organizedCertificateKeys,
}) => {
  const [currentCertificate, setCurrentCertificate] = useState(id);
  const navigate = useNavigate();

  const certificateCount = lengthArray;

  const handleNextCertificate = () => {
    const next = (currentCertificate % certificateCount) + 1;
    setCurrentCertificate(next);
    navigate(`/certificates/${next}`);
  };

  const handlePreviousCertificate = () => {
    const previous =
      ((currentCertificate - 2 + certificateCount) % certificateCount) + 1;
    setCurrentCertificate(previous);
    navigate(`/certificates/${previous}`);
  };

  const handleBackKey = () => {
    navigate(`/`);
  };

  enum AvailableKeys {
    ARROWLEFT = "ArrowLeft",
    ARROWRIGHT = "ArrowRight",
    ESCAPE = "Escape",
  }

  const handleKey = (event: KeyboardEvent) => {
    const handle: { [key: string]: () => void } = {
      [AvailableKeys.ARROWLEFT]: handlePreviousCertificate,
      [AvailableKeys.ARROWRIGHT]: handleNextCertificate,
      [AvailableKeys.ESCAPE]: handleBackKey,
    };

    handle[event.key as AvailableKeys]();
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
        <h2>Certificados</h2>
        <MenuList>
          {organizedCertificateKeys.map((certificate, index) => {
            return (
              <Link
                key={index}
                to={`/certificates/${index + 1}`}
                onClick={() => setCurrentCertificate(index + 1)}
              >
                <MenuItem
                  key={certificate}
                  className={currentCertificate === index + 1 ? "active" : ""}
                >
                  {certificate}
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
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
            <HandleContent onClick={handlePreviousCertificate}>
              <a
                onClick={handlePreviousCertificate}
                className={currentCertificate === 1 ? "none" : ""}
              >
                <FaCircleArrowLeft size={25} />
              </a>
            </HandleContent>
            <CarouselText>{label}</CarouselText>
            <HandleContent onClick={handleNextCertificate}>
              <a
                onClick={handleNextCertificate}
                className={
                  currentCertificate === certificateCount ? "none" : ""
                }
              >
                <FaCircleArrowRight size={25} />
              </a>
            </HandleContent>
          </CarouselContent>
        </Content>
      </CarouselContainer>
    </>
  );
};

export default CertificateMenu;
