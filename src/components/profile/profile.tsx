import React from "react";
import { ProfileContainer, ProfileImg, ProfileP } from "./styles";

const Profile: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <ProfileContainer>
        <ProfileImg src="./src/assets/avatar/avatarFono.jpg" />
      </ProfileContainer>

      <ProfileP>@colodefono</ProfileP>
    </div>
  );
};

export default Profile;
