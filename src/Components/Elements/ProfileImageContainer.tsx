import React from "react";
import styled from "styled-components/macro";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
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
`;

function ProfileImageContainer({
  onFileChange,
  Editable,
}: {
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  Editable: boolean;
}) {
  return (
    <>
      {Editable ? (
        <ProfileContainer>
          <IconButton component="label">
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
        <ProfileContainer></ProfileContainer>
      )}
    </>
  );
}

export default ProfileImageContainer;
