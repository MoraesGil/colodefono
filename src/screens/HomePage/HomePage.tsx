import React from "react";
import LinkList from "../../components/LinkList/LinkList";
import LinkButton from "../../components/LinkButton";
import { Container } from "./HomePage.styles";

const HomePage: React.FC = () => {
  return (
    <Container>
      
     <LinkList>
     <LinkButton text="Certificados" href="https://example.com" />
     <LinkButton text="Clique Aqui" href="https://example.com" />
     <LinkButton text="Clique Aqui" href="https://example.com" />
     <LinkButton text="Clique Aqui" href="https://example.com" />
     </LinkList>

    </Container>
  );
};

export default HomePage;
