import React, { MutableRefObject, useRef, useState } from "react";
import { invalidInputLengthChecker } from "../../../../../helpers/OverlayFormContextHelpers";
import StyleOnBlur from "../../../../../helpers/StyleOnBlur";
import StyleOnFocus from "../../../../../helpers/StyleOnFocus";
import ValidateParameter from "../../../../../helpers/ValidateParameter";
import styled from "styled-components/macro";
import InputBlock from "../../../../Elements/Inputs/InputBlock";
import {
  ChangeStyles,
  EditInputStateProps,
} from "../../../../../Interfaces and Types/Types";
import {
  Input,
  Label,
  SpanText,
  ErrorText,
  TextArea,
} from "../../../../Elements/Inputs/InputBlockCss";

const Wrapper = styled.div`
  padding: 1em 1em;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
function EditProfileInformation({
  styles,
  handleInputVals,
  handleStyles,
  inputVals,
}: {
  styles: ChangeStyles;
  handleInputVals: (name: string, value: string) => void;
  handleStyles: (name: string, whichState: string) => void;
  inputVals: EditInputStateProps;
}) {
  let NameErrText = useRef<HTMLSpanElement | null>(null);
  let WebsiteErrText = useRef<HTMLSpanElement | null>(null);
  function FocusAchieved(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    let WhichState = StyleOnFocus(event, styles);
    if (WhichState !== "Default") {
      handleStyles(event.target.name, WhichState);
    }
  }

  function BlurAchieved(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    console.log("Blurred  Input", event.target);
    let WhichState = StyleOnBlur(event, styles);
    if (WhichState !== "Default") {
      handleStyles(event.target.name, WhichState);
    }
  }
  function InputOnChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (invalidInputLengthChecker(inputVals, event)) {
      return;
    } else {
      handleInputVals(event.target.name, event.target.value);
      if (event.target.name === "name") {
        if (event.target.value) {
          let refObj = { ref: NameErrText, display: "none" };
          let ChangeStylesObj = {
            type: event.target.name,
            whichState: "AllBlueFocussed",
          };
          AfterInputChangeEffects(refObj, ChangeStylesObj);
        } else {
          let refObj = { ref: NameErrText, display: "block" };
          let ChangeStylesObj = {
            type: event.target.name,
            whichState: "AllRedFocussed",
          };
          AfterInputChangeEffects(refObj, ChangeStylesObj);
        }
      } else if (event.target.name === "website") {
        let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
        let ifValidate = ValidateParameter(event.target.value, pattern);
        if (ifValidate || !event.target.value) {
          let refObj = { ref: WebsiteErrText, display: "none" };
          let ChangeStylesObj = {
            type: event.target.name,
            whichState: "AllBlueFocussed",
          };
          AfterInputChangeEffects(refObj, ChangeStylesObj);
        } else {
          let refObj = { ref: WebsiteErrText, display: "block" };
          let ChangeStylesObj = {
            type: event.target.name,
            whichState: "AllRedFocussed",
          };
          AfterInputChangeEffects(refObj, ChangeStylesObj);
        }
      }
    }
  }
  function AfterInputChangeEffects(
    refObj: { ref: MutableRefObject<HTMLSpanElement | null>; display: string },
    stylesObj: { type: string; whichState: string }
  ) {
    if (refObj.ref.current) {
      refObj.ref.current.style.display = refObj.display;
    }
    handleStyles(stylesObj.type, stylesObj.whichState);
  }

  return (
    <Wrapper>
      <InputBlock>
        <>
          <Label WhichState={styles[0].WhichState} htmlFor="name">
            <Input
              value={inputVals.name}
              onChange={InputOnChange}
              name="name"
              onFocus={FocusAchieved}
              onBlur={BlurAchieved}
              type="text"
            />
            <SpanText WhichState={styles[0].WhichState}>Name</SpanText>
          </Label>

          <ErrorText ref={NameErrText}>Name can't be blank!</ErrorText>
        </>
      </InputBlock>
      <Label WhichState={styles[1].WhichState} htmlFor="bio">
        <TextArea
          value={inputVals.bio}
          onChange={InputOnChange}
          name="bio"
          onFocus={FocusAchieved}
          onBlur={BlurAchieved}
        />
        <SpanText WhichState={styles[1].WhichState}>Bio</SpanText>
      </Label>
      <Label WhichState={styles[2].WhichState} htmlFor="location">
        <Input
          value={inputVals.location}
          onChange={InputOnChange}
          name="location"
          onFocus={FocusAchieved}
          onBlur={BlurAchieved}
          type="text"
        />
        <SpanText WhichState={styles[2].WhichState}>Location</SpanText>
      </Label>
      <InputBlock>
        <>
          <Label WhichState={styles[3].WhichState} htmlFor="website">
            <Input
              value={inputVals.website}
              onChange={InputOnChange}
              name="website"
              onFocus={FocusAchieved}
              onBlur={BlurAchieved}
              type="text"
            />
            <SpanText WhichState={styles[3].WhichState}>Website</SpanText>
          </Label>

          <ErrorText ref={WebsiteErrText}>It is not a valid url!</ErrorText>
        </>
      </InputBlock>
    </Wrapper>
  );
}

export default EditProfileInformation;
