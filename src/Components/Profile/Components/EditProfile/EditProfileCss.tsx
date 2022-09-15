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

let Header = styled.div`
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
const ProfileInformation = styled.div``;
const ImagesContainer = styled.div``;
export {
  ProfileInformation,
  ImagesContainer,
  SaveButton,
  FormHeading,
  HeaderItems,
  Header,
  EditProfileForm,
};
