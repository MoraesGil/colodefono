import React, { useState } from "react";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  ContentWrapper,
} from "./CertificatesPage.styles";
import { certificateImages } from "./CertificatePaths";
import Modal from "../../components/Modal/Modal";

const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
              <div>
              <img
                key={index}
                src={img}
                alt={`Certificado ${selectedCertificate}`}
                onClick={() => handleImageClick(img)}
                style={{ cursor: "pointer"}}
              />
              </div>
            ))}
          </CertificateImagesWrapper>
        )}
        {!selectedCertificate && (
          <p>Selecione um certificado para ver sua imagem</p>
        )}
      </ContentWrapper>

      {isModalOpen && (
        <Modal visible={isModalOpen} onClose={handleModalClose}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem do certificado"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default CertificatesPage;
