import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import { Container } from "./IconButtons.styles";

const IconButtons: React.FC = () => {
  return (
    <Container>
      <a href="https://www.instagram.com/colodefono/" target="_blank">
        <FaInstagram />
      </a>

      <a href="https://www.linkedin.com" target="_blank">
        <FaLinkedin />
      </a>

      <a href="https://www.youtube.com/@colodefono2318" target="_blank">
        <FaYoutube />
      </a>

      <a
        href="https://www.tiktok.com/@colodefono?_t=8lke1Ym22bO&_r=1"
        target="_blank"
      >
        <FaTiktok />
      </a>
    </Container>
  );
};

export default IconButtons;
