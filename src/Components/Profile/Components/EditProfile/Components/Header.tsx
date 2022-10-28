import React from "react";
import close from "../../../../../assets/Icons/close.svg";
import Img from "../../../../Elements/Img";
import styled from "styled-components/macro";
import Button from "../../../../Elements/Button";
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

function Header({
  handleDispEditProfile,
  disabled,
  SaveUserData,
  ResetToOriginal,
}: {
  disabled: boolean;
  handleDispEditProfile: (state: boolean) => void;
  SaveUserData: () => void;
  ResetToOriginal: () => void;
}) {
  return (
    <Wrapper>
      <HeaderItems>
        <Img
          className="closeImg"
          onClick={() => {
            handleDispEditProfile(false);
            ResetToOriginal();
          }}
          src={close}
        ></Img>
        <FormHeading>Edit Profile</FormHeading>
      </HeaderItems>
      <HeaderItems>
        <Button
          onClick={() => {
            SaveUserData();
            handleDispEditProfile(false);
          }}
          disabled={disabled}
          size="small"
          secondary={true}
        >
          Save
        </Button>
      </HeaderItems>
    </Wrapper>
  );
}

export default Header;
