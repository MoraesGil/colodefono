import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CertificateImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 5;
  justify-content: center;

  img {
    padding-top: 10;
    width: 45%;
  }
`;
