import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Icons } from "./styles";

const IconsButtons: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: 5 }}>
        <Icons href="https://www.instagram.com" target="_blank">
          <FaInstagram size={24} />
        </Icons>
      </div>
      <div style={{ padding: 5 }}>
        <Icons href="https://www.linkedin.com" target="_blank">
          <FaLinkedin size={24} />
        </Icons>
      </div>
      <div style={{ padding: 5 }}>
        <Icons href="https://www.youtube.com" target="_blank">
          <FaYoutube size={24} />
        </Icons>
      </div>
    </div>
  );
};

export default IconsButtons;
