import React, { useContext } from "react";
import styled from "styled-components/macro";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { UserContext } from "../../Contexts/UserContext";
import { UserStatePartial } from "../../Interfaces and Types/Interfaces";
import Img from "./Img";
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 2/4;
  grid-column: 1/2;
  margin-left: 1em;
  align-self: center;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: lightgray;
  border: 0.3em solid white;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  position: relative;
`;
function ProfileImage({ user }: { user: UserStatePartial | null }) {
  return (
    <>
      {user && user.profileImageUrl ? (
        <Img src={user.profileImageUrl}></Img>
      ) : (
        ""
      )}
    </>
  );
}
function ProfileImageContainer({
  onFileChange,
  Editable,
}: {
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  Editable: boolean;
}) {
  let { user } = useContext(UserContext);
  return (
    <>
      {Editable ? (
        <ProfileContainer>
          <ProfileImage user={user}></ProfileImage>
          <IconButton
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            component="label"
          >
            <input
              onChange={onFileChange}
              hidden
              accept="image/*"
              type="file"
            />
            <PhotoCamera />
          </IconButton>
        </ProfileContainer>
      ) : (
        <ProfileContainer>
          <ProfileImage user={user}></ProfileImage>
        </ProfileContainer>
      )}
    </>
  );
}

export default ProfileImageContainer;
