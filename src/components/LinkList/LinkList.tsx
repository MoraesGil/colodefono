import React from "react";
import { Container } from "./LinkList.styles";
import LinkButton from "../LinkButton";

const LinkList: React.FC = () => {
  return (
    <Container>
      <LinkButton text="Certificados" href="/certificates" />
      <LinkButton text="Colo de fono, agende um papo" href="https://calendly.com/colodefono-consulta/30min"/>
    </Container>
  );
};

export default LinkList;
