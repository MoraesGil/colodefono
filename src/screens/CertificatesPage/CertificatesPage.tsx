import React, { useState } from "react";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  Container,
  ContentWrapper,
} from "./CertificatesPage.styles";

const certificatesImages: Record<number, string[]> = {
  1: [
    "./src/assets/certificates/1/1_page-0001.jpg",
    "./src/assets/certificates/1/1_page-0002.jpg",
  ],
  2: [
    "./src/assets/certificates/3/20 - Valéria Caldeira dos Santos_page-0001.jpg",
    "./src/assets/certificates/3/20 - Valéria Caldeira dos Santos_page-0002.jpg",
  ],
};

const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  return (
    <Container>
      <CertificateMenu onSelect={(id) => setSelectedCertificate(id)} />

      <ContentWrapper>
        {selectedCertificate ? (
          <CertificateImagesWrapper>
            {certificatesImages[selectedCertificate].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Certificado ${selectedCertificate}`}
              />
            ))}
          </CertificateImagesWrapper>
        ) : (
          <p>Selecione um certificado para ver sua imagem</p>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default CertificatesPage;
