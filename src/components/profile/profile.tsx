import React from "react";

export const Profile: React.FC = (): any => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", padding: "24px" }}>
        <img
          src="./src/assets/avatar/avatar.png"
          alt="foto avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p>@instagram</p>
      </div>

      <div>
        <span>Altera o tema</span>
      </div>
      <ul>
        <li>
          <a href="#">Inscrever-se no NLW</a>
        </li>
        <li>
          <a href="#">Baixar meu e-book</a>
        </li>
        <li>
          <a href="https://github.com/lybiomoraesjr" target="_blank">
            Ver meu portifólio
          </a>
        </li>
        <li>
          <a href="https://rocketseat.com.br/explorer" target="_blank">
            Conheça o explorer
          </a>
        </li>
      </ul>

      <div>
        <p>redes socias</p>
      </div>
    </div>
  );
};
