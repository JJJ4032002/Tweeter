import React from "react";
import close from "../../../../../assets/Icons/close.svg";
import Img from "../../../../Elements/Img";
import styled from "styled-components/macro";
let Wrapper = styled.div`
  padding: 0.6em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
let HeaderItems = styled.div`
  gap: 1.7em;
  display: flex;
  align-items: center;
`;
const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;
const SaveButton = styled.button`
  font-family: "Montserrat";
  padding: 0.5em 1.2em;
  border-radius: 2.5em;
  border: transparent;
  background-color: black;
  color: white;
  font-weight: 800;
  cursor: pointer;
`;

function Header({
  handleDispEditProfile,
}: {
  handleDispEditProfile: (state: boolean) => void;
}) {
  return (
    <Wrapper>
      <HeaderItems>
        <Img
          className="closeImg"
          onClick={() => {
            handleDispEditProfile(false);
          }}
          src={close}
        ></Img>
        <FormHeading>Edit Profile</FormHeading>
      </HeaderItems>
      <HeaderItems>
        <SaveButton>Save</SaveButton>
      </HeaderItems>
    </Wrapper>
  );
}

export default Header;
