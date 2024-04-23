import React, { useState } from "react";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  ContentWrapper,
} from "./CertificatesPage.styles";
import { certificateImages } from "./CertificatePaths";

const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const lengthArray = Object.keys(certificateImages).length;

  return (
    <div>
      <CertificateMenu
        lengthArray={lengthArray}
        onSelect={(id) => setSelectedCertificate(id)}
      />

      <ContentWrapper>
        {selectedCertificate && (
          <CertificateImagesWrapper>
            {certificateImages[selectedCertificate].map((img, index) => (
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
    </div>
  );
};

export default CertificatesPage;
