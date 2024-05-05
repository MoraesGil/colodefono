import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CertificateMenu, {
	CertificatePosition,
} from '../../components/CertificateMenu/CertificateMenu';
import {
	ButtonWrapper,
	CertificateImagesWrapper,
	CertificatesPageWrapper,
	ContainerWrapper,
	ContentWrapper,
} from './CertificatesPage.styles';
import Modal from '../../components/Modal/Modal';
import { certificateImages } from './CertificatePaths';
import { BackButtonSide } from '../../components/CertificateMenu/CertificateMenu.styles';

const CertificatesPage: React.FC = () => {
	const baseUrl = import.meta.env.BASE_URL;

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
				lengthArray={certificatesLength}
				label={label}
				organizedCertificateKeys={organizedCertificateKeys}
			/>

			<ContainerWrapper>
				<CertificateMenu					
					position={CertificatePosition.TOP}
					lengthArray={certificatesLength}
					label={label}
					organizedCertificateKeys={organizedCertificateKeys}
				/>

				<CertificateImagesWrapper>
					{images.imagePaths.map((imgPath, index) => (
						<div key={index}>
							<img
								src={`${baseUrl}assets${imgPath}`}
								alt={`Certificado ${index}`}
								onClick={() => handleImageClick(imgPath)}
								style={{ cursor: 'pointer' }}
							/>
						</div>
					))}
				</CertificateImagesWrapper>
			</ContainerWrapper>

			{isModalOpen && (
				<Modal visible={isModalOpen} onClose={handleModalClose}>
					{selectedImage && (
						<img
							src={baseUrl + selectedImage}
							alt="Imagem do certificado"
							style={{ maxWidth: '100%' }}
						/>
					)}
				</Modal>
			)}
		</CertificatesPageWrapper>
	);
};

export default CertificatesPage;
