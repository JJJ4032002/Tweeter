import { Props } from "../../../Interfaces and Types/Interfaces";
import styled, { css } from "styled-components";
import { Buttons } from "../../AuthenticationPageCss";
const SubmitButton = styled(Buttons)<Props>`
  width: 100%;
  border-radius: 5em;
  margin: 0;
  font-size: 1rem;
  background-color: black;
  color: white;
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
const LowerContainerBlock = styled.div`
  width: 90%;
  margin: 0.5em auto 0.8em auto;
`;
export { SubmitButton, LowerContainerBlock };
