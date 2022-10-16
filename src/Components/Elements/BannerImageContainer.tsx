import React from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  background-color: lightgrey;
  grid-area: BannerImage;
  grid-column: 1/3;

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
function BannerImageContainer({
  onFileChange,
  Editable,
}: {
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  Editable: boolean;
}) {
  return (
    <>
      {Editable ? (
        <BannerContainer>
          <IconButton component="label">
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
        <BannerContainer></BannerContainer>
      )}
    </>
  );
}

export default BannerImageContainer;
