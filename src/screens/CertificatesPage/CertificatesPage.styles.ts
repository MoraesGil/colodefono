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

  @media screen and (min-width: 1000px) {
    display: none;
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
`;

// side menu -------------

export const ContentSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1001px) {
    display: none;
  }
`;

export const ContentImagesSide = styled.div`
  margin-left: 200px;
  padding: 10px;
  height: 100vh;
  overflow: auto;
  padding-left: 50px;

  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;

  div {
    justify-content: center;
    padding: 10px;
    width: 50%;
  }
  img {
    padding-top: 10;
    width: 100%;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.5);
  }
`;
