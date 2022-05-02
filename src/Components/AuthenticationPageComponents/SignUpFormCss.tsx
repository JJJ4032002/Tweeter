import styled from "styled-components";
import { Props } from "../../Interfaces and Types/Interfaces";
import { devices } from "../../Media Queries/Queries";
const Overlay = styled.div<Props>`
  display: ${(props) => props.display};
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  position: absolute;
  opacity: ${(props) => props.opacity};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0.4em 1em;
  background-color: white;
  border-radius: 0.7em;
  display: grid;
  min-height: 100%;
  grid-template-rows: 0.2fr 1.5fr 0.7fr;
  overflow: auto;
  gap: 0.5em;
  &#signIn {
    margin-top: 1em;
  }
  @media ${devices.mobileL} {
    min-height: 50%;
    width: 90%;
    height: 90%;
    grid-template-rows: 0.3fr 1.5fr 0.7fr;
  }

  @media ${devices.tablet} {
    height: 50%;
  }
  @media ${devices.laptop} {
    height: 60%;
    &#signIn {
      margin-top: 0;
    }
  }
`;

export { FormContainer, Overlay };
