import React from "react";
import leftArrow from "../../../../assets/Icons/leftArrow.svg";
import Img from "../../Img";
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
  Heading,
  onPrevious,
  onApply,
}: {
  Heading: string;
  onPrevious: (state: string | null) => void;
  onApply: () => void;
}) {
  return (
    <Wrapper>
      <HeaderItems>
        <Img
          onClick={() => {
            onPrevious(null);
          }}
          src={leftArrow}
        ></Img>
        <FormHeading>{Heading}</FormHeading>
      </HeaderItems>
      <HeaderItems>
        <SaveButton onClick={onApply}>Apply</SaveButton>
      </HeaderItems>
    </Wrapper>
  );
}

export default Header;
