import React from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
const BannerContainer = styled.div`
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
function BannerImageContainer({ Editable }: { Editable: boolean }) {
  return <BannerContainer></BannerContainer>;
}

export default BannerImageContainer;
