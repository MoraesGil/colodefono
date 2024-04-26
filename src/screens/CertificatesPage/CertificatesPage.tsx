import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  ContentImagesSide,
  ContentSide,
  ContentWrapper,
} from "./CertificatesPage.styles";
import Modal from "../../components/Modal/Modal";
import { certificateImages } from "./CertificatePaths";

const CertificatesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const valueId = id ? id : 1;

  const certificatesLength = Object.keys(certificateImages).length;

  let idValue = Number(valueId);

  if (
    isNaN(idValue) ||
    idValue < 1 ||
    idValue > certificatesLength ||
    !idValue
  ) {
    idValue = 1;
  }

  const certificateIndex = idValue - 1;

  const labelKeys = Object.keys(certificateImages);
  const label = labelKeys[certificateIndex];
  const images = certificateImages[label];

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
      <CertificateMenu lengthArray={labelKeys.length} label={label} id={id} />

      <ContentSide>
        <ContentImagesSide>
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
        </ContentImagesSide>
      </ContentSide>

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
