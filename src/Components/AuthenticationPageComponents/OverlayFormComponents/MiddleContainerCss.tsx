import styled from "styled-components";

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

export { MiddleContainerBlock, Form, DateOfBirthCont };
