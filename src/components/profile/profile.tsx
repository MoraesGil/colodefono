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
        <ProfileImg src="./src/assets/avatar/avatar.png" />
      </ProfileContainer>

      <ProfileP>@instagram</ProfileP>
    </div>
  );
};

export default Profile;
