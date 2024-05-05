import React from "react";
import { Container } from "./HomePage.styles";
import LinkList from "../../components/LinkList/LinkList";
import IconButtons from "../../components/IconButtons";
import Profile from "../../components/Profile";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Profile />

      <LinkList />

      <IconButtons />
    </Container>
  );
};

export default HomePage;
