import React from "react";
import styled from "styled-components";
import home from "../../assets/Icons/home.svg";
import search from "../../assets/Icons/search.svg";
import notifications from "../../assets/Icons/notifications.svg";
import messages from "../../assets/Icons/messages.svg";
import { devices } from "../../Media Queries/Queries";
const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: RightSection;
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

function RightSection() {
  return (
    <RightContainer>
      <img src={home} alt="" />
      <img src={search} alt="" />
      <img src={notifications} alt="" />
      <img src={messages} alt="" />
    </RightContainer>
  );
}

export default RightSection;
