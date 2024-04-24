import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  ContentWrapper,
} from "./CertificatesPage.styles";
import { certificateImages } from "./CertificatePaths";
import Modal from "../../components/Modal/Modal";

const CertificatesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const certificateId = parseInt(id || "1");
  const images = certificateImages[certificateId] || [];

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

  return (
    <div>
      <CertificateMenu lengthArray={Object.keys(certificateImages).length} />

      <ContentWrapper>
        <CertificateImagesWrapper>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Certificado ${certificateId}`}
                onClick={() => handleImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </CertificateImagesWrapper>
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
