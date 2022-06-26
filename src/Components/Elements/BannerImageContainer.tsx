import React from "react";
import styled from "styled-components/macro";
const BannerContainer = styled.div`
  padding: 6em 0;
  background-color: lightgrey;
  grid-area: BannerImage;
  grid-column: 1/3;
`;
function BannerImageContainer() {
  return <BannerContainer></BannerContainer>;
}

export default BannerImageContainer;
