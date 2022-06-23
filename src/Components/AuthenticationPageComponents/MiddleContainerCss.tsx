import styled, { css } from "styled-components/macro";
import { Props } from "../../Interfaces and Types/Interfaces";

const MiddleContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  overflow-y: auto;
  width: 90%;
  margin: 0 auto;
`;

const DateOfBirthCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
const PasswordSpan = styled.span`
  font-size: 0.8rem;
  color: #2da7ed;

  margin-top: 0.4em;
  margin-left: 0.4em;
  cursor: pointer;
`;
const SignInErrText = styled.span<Props>`
  text-align: center;
  color: red;
  font-weight: 800;
  display: none;
  ${(props) =>
    props.ErrTextDispState === true &&
    css`
      display: block;
    `}
`;
export {
  MiddleContainerBlock,
  Form,
  DateOfBirthCont,
  PasswordSpan,
  SignInErrText,
};
