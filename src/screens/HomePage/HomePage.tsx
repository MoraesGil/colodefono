import React from "react";
import LinkList from "../../components/LinkList/LinkList";
import LinkButton from "../../components/LinkButton";
import { Container } from "./HomePage.styles";
import IconButtons from "../../components/IconButtons";
import Profile from "../../components/Profile";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Profile />

      <LinkList>
        <LinkButton text="Certificados" href="https://example.com" />
        <LinkButton text="Clique Aqui" href="https://example.com" />
        <LinkButton text="Clique Aqui" href="https://example.com" />
        <LinkButton text="Clique Aqui" href="https://example.com" />
      </LinkList>

      <IconButtons />
    </Container>
  );
};

export default HomePage;
