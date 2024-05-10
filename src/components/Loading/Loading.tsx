import React from "react";
import { Container } from "./Loading.styles";
import { ClipLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <Container>
      <ClipLoader
        color={"#0187a7"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

export default Loading;
