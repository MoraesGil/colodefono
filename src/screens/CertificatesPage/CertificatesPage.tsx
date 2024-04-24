import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  ContentWrapper,
} from "./CertificatesPage.styles";
import Modal from "../../components/Modal/Modal";
import { certificateImages } from "./CertificatePaths";

const CertificatesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const certificateIndex = parseInt(id || "1", 10) - 1;

  const categoryKeys = Object.keys(certificateImages);
  const category = categoryKeys[certificateIndex % categoryKeys.length];
  const images = certificateImages[category];

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
      <CertificateMenu
        lengthArray={categoryKeys.length}
        label={category}
        id={id}
      />

      <ContentWrapper>
        <CertificateImagesWrapper>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Certificado ${index}`}
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
