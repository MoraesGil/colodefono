import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  CarouselContainer,
  CarouselContent,
  CarouselText,
  HandleContent,
  Logo,
  SidebarContainer,
  TopContent,
} from "./CertificateMenu.styles";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export enum CertificatePosition {
  TOP = 1,
  LEFT = 2,
}
interface CertificateMenuProps {
  lengthArray: number;
  label: string;
  organizedCertificateKeys: string[];
  position?: CertificatePosition;
  disabled?: boolean;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({
  lengthArray,
  label,
  organizedCertificateKeys,
  position = CertificatePosition.LEFT,
  disabled,
}) => {
  const [currentCertificate, setCurrentCertificate] = useState(1);
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

    if (!disabled) {
      handle[event.key as AvailableKeys]();
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
      {position === CertificatePosition.LEFT && (
        <SidebarContainer>
          <h2>Certificados</h2>
          <ul>
            {organizedCertificateKeys.map((certificate, index) => {
              return (
                <Link
                  key={index}
                  to={`/certificates/${index + 1}`}
                  onClick={() => setCurrentCertificate(index + 1)}
                >
                  <li
                    key={certificate}
                    className={currentCertificate === index + 1 ? "active" : ""}
                  >
                    {certificate}
                  </li>
                </Link>
              );
            })}
          </ul>
        </SidebarContainer>
      )}

      {position === CertificatePosition.TOP && (
        <CarouselContainer>
          <TopContent>
            <Logo>
              <Link to="/">Colo de Fono</Link>
            </Logo>
            <Link to="/">
              <BackButton>Voltar</BackButton>
            </Link>
          </TopContent>
          <CarouselContent>
            <HandleContent>
              <a
                href="#"
                onClick={handlePreviousCertificate}
                className={currentCertificate === 1 ? "none" : ""}
              >
                <FaCircleArrowLeft size={25} />
              </a>

              <a
                onClick={handleNextCertificate}
                className={
                  currentCertificate === certificateCount ? "none" : ""
                }
              >
                <FaCircleArrowRight size={25} />
              </a>
            </HandleContent>
            <CarouselText>{label}</CarouselText>
          </CarouselContent>
        </CarouselContainer>
      )}
    </>
  );
};

export default CertificateMenu;
