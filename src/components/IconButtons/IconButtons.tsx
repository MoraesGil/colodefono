import React from "react";
import { Container } from "./IconButtons.styles";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const IconButtons: React.FC = () => {
  return (
    <Container>
      <a href="https://www.instagram.com/colodefono/" target="_blank">
        <FaInstagram />
      </a>

      <a href="https://www.linkedin.com" target="_blank">
        <FaLinkedin/>
      </a>

      <a href="https://www.youtube.com" target="_blank">
        <FaYoutube />
      </a>
    </Container>
  );
};

export default IconButtons;
