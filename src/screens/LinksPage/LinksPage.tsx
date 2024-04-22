import React from "react";
import LinkList from "../../components/LinkList/LinkList";
import LinkButton from "../../components/LinkButton";
import { Container } from "./LinksPage.styles";

const LinksPage: React.FC = () => {
  return (
    <Container>
     <LinkList>
     <LinkButton text="Clique Aqui" href="https://example.com" />
     </LinkList>
    </Container>
  );
};

export default LinksPage;
