import styled from "styled-components/macro";
import { devices } from "../../../../Media Queries/Queries";

let EditProfileForm = styled.div`
  width: 100%;
  background: white;
  height: 100%;
  border-radius: 0.7em;
  overflow-y: auto;

  @media ${devices.tablet} {
    max-width: 585px;
    height: 90%;
  }
`;

const ProfileInformation = styled.div``;
const ImagesContainer = styled.div``;
export { ProfileInformation, ImagesContainer, EditProfileForm };
