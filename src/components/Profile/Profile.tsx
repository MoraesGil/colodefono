import React from "react";
import { ProfileContainer, ProfileImg, ProfileP } from "./styles";
import perfil from "../../assets/avatar/avatarFono.jpg";

const Profile: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <ProfileContainer>
        <ProfileImg src={perfil} />
      </ProfileContainer>

      <ProfileP>@colodefono</ProfileP>
    </div>
  );
};

export default Profile;
