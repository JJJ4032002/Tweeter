import styled from "styled-components/macro";
import { devices } from "../../../../Media Queries/Queries";
const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0.4em 1em;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
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

export { FormWrapper };
