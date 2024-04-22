import React from "react";
import { Container } from "./LinkList.styles";
import LinkButton from "../LinkButton";

const LinkList: React.FC = () => {
  return (
    <Container>
      <LinkButton text="Certificados" href="/certificates" />
      <LinkButton text="Clique Aqui" href="https://example.com" />
      <LinkButton text="Clique Aqui" href="https://example.com" />
      <LinkButton text="Clique Aqui" href="https://example.com" />
    </Container>
  );
};

export default LinkList;
