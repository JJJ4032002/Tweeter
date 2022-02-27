import {
  SpanText,
  FormContainer,
  Label,
  Form,
  Input,
  MiddleContainer,
  UpperContainer,
  Overlay,
  DateOfBirthCont,
} from "./OverlayFormCss";
import logo from "../../assets/Icons/logo.svg";
import close from "../../assets/Icons/close.svg";
import { Image } from "../AuthenticationPageCss";

import { OverlayFormProps } from "../../Interfaces and Types/Interfaces";

function OverlayForm({
  ChangeStyles,
  FocusAchieved,
  BlurAchieved,
}: OverlayFormProps) {
  return (
    <>
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
    </>
  );
}

export default OverlayForm;
