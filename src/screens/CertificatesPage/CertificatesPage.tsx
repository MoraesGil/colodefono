import React, { useState } from "react";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  Container,
  ContentWrapper,
} from "./CertificatesPage.styles";
import { certificatesImages } from "./CertificatesPaths";

const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const lengthArray = Object.keys(certificatesImages).length;

  return (
    <Container>
      <CertificateMenu
        lengthArray={lengthArray}
        onSelect={(id) => setSelectedCertificate(id)}
      />

      <ContentWrapper>
        {selectedCertificate && (
          <CertificateImagesWrapper>
            {certificatesImages[selectedCertificate].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Certificado ${selectedCertificate}`}
              />
            ))}
          </CertificateImagesWrapper>
        )}
        {!selectedCertificate && (
          <p>Selecione um certificado para ver sua imagem</p>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default CertificatesPage;
