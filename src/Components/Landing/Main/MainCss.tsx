import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
const GridItemOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  grid-area: Banner;
`;
const GridItemTwo = styled.div`
  height: 100%;
  grid-area: form;
  padding: 1.5em;
  display: grid;
  gap: 0.2em;
  grid-template-rows: 0.8fr 1.2fr 0.7fr 1.5fr 1fr;
  @media ${devices.tablet} {
    grid-template-rows: 1fr 2fr 1fr 2fr 1fr;
    padding: 2em;
    gap: 0.7em;
  }
  @media ${devices.laptopL} {
    padding: 3em 2em;
  }
`;
const PrimaryHeading = styled.h1`
  font-family: "Montserrat", "Times New Roman", Times, serif;
  align-self: center;
  font-size: clamp(2.2rem, 1.5782rem + 2.7636vw, 6rem);
`;
const SecondaryHeading = styled.h2`
  font-family: "Montserrat", "Times New Roman", Times, serif;
  font-size: clamp(1.5rem, 1.2545rem + 1.0909vw, 3rem);
`;
const SignInButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SignUpButtonsDiv = styled.div``;
export {
  GridItemOne,
  GridItemTwo,
  SignInButtonsDiv,
  SignUpButtonsDiv,
  PrimaryHeading,
  SecondaryHeading,
};
