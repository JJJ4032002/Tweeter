import React, { useContext } from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { UserContext, UserStatePartial } from "../../Contexts/UserContext";
import Img from "./Img";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  background-color: lightgrey;
  grid-area: BannerImage;
  grid-column: 1/3;
  position: relative;

  @media ${devices.mobileM} {
    height: 160px;
  }
  @media ${devices.mobileL} {
    height: 180px;
  }
  @media ${devices.tablet} {
    height: 200px;
  }
  @media ${devices.laptop} {
    height: 250px;
  }
`;

function BannerImage({ user }: { user: UserStatePartial | null }) {
  return (
    <>
      {user && user.bannerImageUrl ? <Img src={user.bannerImageUrl}></Img> : ""}
    </>
  );
}
function BannerImageContainer({
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
        <BannerContainer>
          <BannerImage user={user}></BannerImage>
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
        </BannerContainer>
      ) : (
        <BannerContainer>
          <BannerImage user={user}></BannerImage>
        </BannerContainer>
      )}
    </>
  );
}

export default BannerImageContainer;
