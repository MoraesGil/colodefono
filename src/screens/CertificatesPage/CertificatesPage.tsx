import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CertificateMenu, {
  CertificatePosition,
} from "../../components/CertificateMenu/CertificateMenu";
import {
  CertificateImagesWrapper,
  CertificatesPageWrapper,
  ContainerWrapper,
} from "./CertificatesPage.styles";
import Modal from "../../components/Modal/Modal";
import { certificateImages } from "./CertificatePaths";
import ImageLoadingProvider from "../../containers/ImageLoadingContext";
import LoaderImage from "../../components/LoaderImage";

const CertificatesPage: React.FC = () => {
  const sanitizeBaseUrl = (url: string): string => url?.replace(/\/+$/, "");
  const baseUrl = sanitizeBaseUrl(import.meta.env.BASE_URL);

  const { id } = useParams<{ id: string }>();
  const valueId = id ? id : 1;

  const labelKeys = Object.keys(certificateImages);

  const certificatesLength = labelKeys.length;

  let idValue = Number(valueId);
  if (
    isNaN(idValue) ||
    idValue < 1 ||
    idValue > certificatesLength ||
    !idValue
  ) {
    idValue = 1;
  }

  const favoriteCertificateKeys = labelKeys
    .filter((key) => certificateImages[key].favorite)
    .reverse();

  const unfavoritedCertificateKeys = labelKeys
    .filter((key) => !certificateImages[key].favorite)
    .reverse();

  const organizedCertificateKeys = [
    ...favoriteCertificateKeys,
    ...unfavoritedCertificateKeys,
  ];

  const certificateIndex = idValue - 1;
  const label = organizedCertificateKeys[certificateIndex];
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
    <CertificatesPageWrapper>
      <CertificateMenu
        disabled={isModalOpen}
        lengthArray={certificatesLength}
        label={label}
        organizedCertificateKeys={organizedCertificateKeys}
      />

      <ContainerWrapper>
        <CertificateMenu
          disabled={isModalOpen}
          position={CertificatePosition.TOP}
          lengthArray={certificatesLength}
          label={label}
          organizedCertificateKeys={organizedCertificateKeys}
        />

        <CertificateImagesWrapper>
          <ImageLoadingProvider>
            {images.imagePaths.map((imgPath, index) => (
              <div key={index}>
                <LoaderImage
                  src={`${baseUrl}${imgPath}`}
                  alt={`Certificado ${index}`}
                  onClick={() => handleImageClick(imgPath)}
                  customStyle={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </ImageLoadingProvider>
        </CertificateImagesWrapper>
      </ContainerWrapper>

      {isModalOpen && (
        <Modal visible={isModalOpen} onClose={handleModalClose}>
          {selectedImage && (
            <img
              src={`${baseUrl}${selectedImage}`}
              alt="Imagem do certificado"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Modal>
      )}
    </CertificatesPageWrapper>
  );
};

export default CertificatesPage;
