import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Container } from "./IconsButtons.styles";

const IconsButtons: React.FC = () => {
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

export default IconsButtons;
