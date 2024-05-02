import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1000px) {
    width: 75%;
  }
`;

export const CertificatesPageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-right: 15px;
  padding-top: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    margin-bottom: 5%;
  }
`;

export const CertificateImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;

  div {
    padding: 10px;
    width: 50%;
  }
  img {
    padding-top: 10;
    width: 100%;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      padding: 0 5%;
    }
  }
`;
