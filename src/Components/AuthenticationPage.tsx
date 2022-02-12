import React from "react";
import styled from "styled-components";
import BannerImg from "../assets/Images/BannerImg.jpg";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
`;
const GridItems = styled.div`
  height: inherit;
`;
function AuthenticationPage() {
  return (
    <GridContainer>
      <GridItems>
        <Image src={BannerImg} alt="BannerImg" />
      </GridItems>
      <GridItems></GridItems>
    </GridContainer>
  );
}

export default AuthenticationPage;
