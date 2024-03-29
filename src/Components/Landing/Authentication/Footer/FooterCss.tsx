import { Props } from "../../../../Interfaces and Types/Interfaces";
import styled, { css } from "styled-components/macro";
import { Buttons } from "../../LandingCss";
const SubmitButton = styled(Buttons)<Props>`
  width: 100%;
  border-radius: 5em;
  margin: 0;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondaryBtnBackgound};
  color: ${(props) => props.theme.colors.secondaryBtnText};
  pointer-events: none;
  opacity: 0.7;
  ${(props) =>
    props.FinBtnState === true &&
    css`
      pointer-events: auto;
      opacity: 1;
      cursor: pointer;
    `}
`;
const FooterBlock = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5em auto 0.8em auto;
`;
export { SubmitButton, FooterBlock };
