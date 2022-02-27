import React, { useState } from "react";
import MainComponent from "./AuthenticationPageComponents/MainComponent";
import OverlayForm from "./AuthenticationPageComponents/OverlayForm";
import { ChangeStyles } from "../Interfaces and Types/Types";
import { GridContainer } from "./AuthenticationPageCss";

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
      <MainComponent></MainComponent>

      <OverlayForm
        ChangeStyles={ChangeStyles}
        FocusAchieved={FocusAchieved}
        BlurAchieved={BlurAchieved}
      ></OverlayForm>
    </GridContainer>
  );
}

export { AuthenticationPage };
