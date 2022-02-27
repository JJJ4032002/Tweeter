import React, { useState } from "react";
import styled, { css } from "styled-components";
import BannerImg from "../assets/Images/BannerImg-min.jpg";
import { devices } from "../Media Queries/Queries";
import logo from "../assets/Icons/logo.svg";
import close from "../assets/Icons/close.svg";
interface Props {
  primary?: boolean;
  position?: number;
  fontSize?: number;
  borderColor?: string;
  borderWidth?: number;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70vh 40vh;
  grid-template-areas:
    "form"
    "Banner";
  @media ${devices.tablet} {
    grid-template-rows: 60vh 40vh;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 110vh;
    grid-template-areas: "Banner form";
  }
  @media ${devices.laptopL} {
    grid-template-rows: 100vh;
  }
`;
const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;

  &.BannerImg {
    grid-area: 1 / 1 / span 4 / span 4;
    width: 100%;
  }
  &#closeImg {
    height: 50%;
  }
  &#logoInForm {
    filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
      brightness(96%) contrast(93%);
  }
`;

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
const AbsImg = styled.img`
  grid-area: 2/2/4/4;
  height: 100%;
  width: 100%;
`;
const DarkImage = styled.img`
  filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
    brightness(96%) contrast(93%);
  height: 100%;
  align-self: center;
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
const SignUpButtonsDiv = styled.div``;
const Buttons = styled.button<Props>`
  display: inline-block;
  width: 70%;
  padding: 1em 1.2em;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5em 0;
  border-radius: 5em;
  background: transparent;
  border: 0.1em solid rgba(0, 0, 0, 0.2);

  &.SignUp {
    color: #2da7ed;
  }
  &:hover {
    opacity: 0.7;
  }
  & ~ &:hover {
    background-color: #0d7cbd;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: #2da7ed;
      color: white;
    `}
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;
const Para = styled.p<Props>`
  width: 70%;
  text-align: center;
  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
    `}
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;
const SignInButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 0.4em 1em;
  background-color: white;
  border-radius: 0.7em;
  display: grid;
  height: 85%;
  grid-template-rows: 0.5fr 3fr 1fr;
  overflow: auto;
  gap: 0.5em;
`;
const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  overflow-y: auto;
  width: 90%;
  margin: 0 auto;
`;
const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  font-size: 1.2rem;
  margin-top: 0.8em;
  background-color: transparent;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;

const DateOfBirthCont = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
const Label = styled.label<Props>`
  border-width: ${(props) => props.borderWidth}px;
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  position: relative;
  padding: 0.5em 0.5em;
  border-radius: 0.2em;
  transition: border-width 150 ease, border-color 150 ease;
  background-color: transparent;
`;
const SpanText = styled.span<Props>`
  left: 1.5%;
  top: ${(props) => props.position}%;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.borderColor};
  transition: top 150ms ease, font-size 150ms ease;
  position: absolute;
`;
type ChangeStyles = {
  borderColor: string;
  position: number;
  fontSize: number;
  focus: string;
  name: string;
  borderWidth: number;
}[];
function AuthenticationPage() {
  const [ChangeStyles, setChangeStyles] = useState<ChangeStyles>([
    {
      name: "name",
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
    {
      name: "email",
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
  ]);
  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target);
    let FilteredArr = ChangeStyles.filter((value) => {
      return value.name !== event.target.name;
    });
    let newObj = {
      name: event.target.name,
      borderColor: "#2da7ed",
      focus: "",
      fontSize: 0.8,
      position: 5,
      borderWidth: 2,
    };
    if (event.target.name === "name") {
      setChangeStyles([newObj, ...FilteredArr]);
    } else {
      setChangeStyles([...FilteredArr, newObj]);
    }
  }
  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Blurred", event.target);
    let FilteredArr = ChangeStyles.filter((value) => {
      return value.name !== event.target.name;
    });
    let newObj = {
      name: event.target.name,
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    };
    if (event.target.name === "name") {
      setChangeStyles([newObj, ...FilteredArr]);
    } else {
      setChangeStyles([...FilteredArr, newObj]);
    }
  }
  return (
    <GridContainer>
      <GridItemOne>
        <Image className="BannerImg" src={BannerImg} alt="BannerImg" />
        <AbsImg src={logo} alt="LogoImg"></AbsImg>
      </GridItemOne>
      <GridItemTwo>
        <DarkImage src={logo} alt="LogoImg"></DarkImage>
        <PrimaryHeading>Happening Now</PrimaryHeading>
        <SecondaryHeading>Join Tweeter today</SecondaryHeading>
        <SignUpButtonsDiv>
          <Buttons>Sign in with google</Buttons>
          <Para>or</Para>
          <Buttons primary={true}>Sign up with phone or email</Buttons>
        </SignUpButtonsDiv>
        <SignInButtonsDiv>
          <Para primary={true}>Already have an account ?</Para>
          <Buttons className="SignUp">Sign in</Buttons>
        </SignInButtonsDiv>
      </GridItemTwo>
      <Overlay>
        <FormContainer>
          <UpperContainer>
            <Image id="closeImg" src={close}></Image>
            <Image id="logoInForm" src={logo}></Image>
          </UpperContainer>
          <MiddleContainer>
            <h2>Create your account</h2>
            <Form>
              <Label
                borderWidth={ChangeStyles[0].borderWidth}
                borderColor={ChangeStyles[0].borderColor}
                htmlFor="name"
              >
                <Input
                  name="name"
                  onFocus={FocusAchieved}
                  onBlur={BlurAchieved}
                  type="text"
                />
                <SpanText
                  fontSize={ChangeStyles[0].fontSize}
                  position={ChangeStyles[0].position}
                  borderColor={ChangeStyles[0].borderColor}
                >
                  Name
                </SpanText>
              </Label>
              <Label
                borderWidth={ChangeStyles[1].borderWidth}
                borderColor={ChangeStyles[1].borderColor}
                htmlFor="email"
              >
                <Input
                  name="email"
                  onFocus={FocusAchieved}
                  onBlur={BlurAchieved}
                  type="email"
                />
                <SpanText
                  fontSize={ChangeStyles[1].fontSize}
                  position={ChangeStyles[1].position}
                  borderColor={ChangeStyles[1].borderColor}
                >
                  Email
                </SpanText>
              </Label>
              <DateOfBirthCont></DateOfBirthCont>
            </Form>
          </MiddleContainer>
        </FormContainer>
      </Overlay>
    </GridContainer>
  );
}

export default AuthenticationPage;
