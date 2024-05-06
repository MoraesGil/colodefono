import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;

	@media screen and (max-width: 1300px) {
		flex-direction: column;
	}
`;

export const CertificatesPageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		padding-left: 10%;
		padding-right: 10%;
	}
`;

export const ContainerWrapper = styled.div`
	height: 100vh;
	overflow-y: auto;

	@media screen and (min-width: 1000px) {
		width: 80%;
	}
`;

export const CertificateImagesWrapper = styled.div`
	gap: 10px;

	div {
		padding: 10px;
		width: 100%;
	}
	img {
		padding-top: 10;
		width: 100%;
		box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.5);
	}

	@media screen and (min-width: 1000px) {
		padding: 0 10%;
	}
`;
