import React, { useContext } from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { UserContext } from "../../Contexts/UserContext";
import { UserStatePartial } from "../../Interfaces and Types/Interfaces";
import Img from "./Img";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: lightgrey;
  grid-area: BannerImage;
  grid-column: 1/3;
  position: relative;

  @media ${devices.mobileM} {
  }
  @media ${devices.mobileL} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
  }
`;

function BannerImage({ user }: { user: UserStatePartial | null }) {
  return (
    <>
      {user && user.bannerImageUrl ? (
        <Img className="BannerContainer" src={user.bannerImageUrl}></Img>
      ) : (
        ""
      )}
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
