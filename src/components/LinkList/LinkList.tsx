import React from "react";
import { Container } from "./LinkList.styles";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const LinkList: React.FC = () => {
  return (
    <Container>
      <Link to={`${baseUrl}/certificates/1`}>Certificados</Link>
      <Link
        to={"https://calendly.com/colodefono-consulta/30min"}
        target="_blank"
      >
        Colo de fono, agende uma availiação
      </Link>
    </Container>
  );
};

export default LinkList;
