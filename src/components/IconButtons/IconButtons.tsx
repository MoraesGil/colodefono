import React from "react";
import { Icons } from "./styles";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const IconsButtons: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: 15 }}>
        <Icons href="https://www.instagram.com/colodefono/" target="_blank">
          <FaInstagram size={26} />
        </Icons>
      </div>
      <div style={{ padding: 15 }}>
        <Icons href="https://www.linkedin.com" target="_blank">
          <FaLinkedin size={26} />
        </Icons>
      </div>
      <div style={{ padding: 15 }}>
        <Icons href="https://www.youtube.com" target="_blank">
          <FaYoutube size={26} />
        </Icons>
      </div>
    </div>
  );
};

export default IconsButtons;
