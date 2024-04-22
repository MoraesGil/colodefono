import React from "react";
import { Container } from "./LinkButton.styles";
import { Link } from "react-router-dom";

type LinkButtonType = {
  href: string;
  text: string;
};

const LinkButton: React.FC<LinkButtonType> = ({ href, text }) => {
  return (
    <Container>
      <Link to={href}>
        <a>{text}</a>
      </Link>
    </Container>
  );
};

export default LinkButton;
