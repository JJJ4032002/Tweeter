import { InputValsInterface } from "../Interfaces and Types/Interfaces";

function FocusAllRedCombinations(
  inputVals: InputValsInterface,
  event: React.FocusEvent<HTMLInputElement>,
  validEmailInp: boolean,
  NameErrText: { current: HTMLElement | null }
) {
  if (
    (inputVals.nameBool && !inputVals.name && event.target.name === "name") ||
    (inputVals.emailBool &&
      !validEmailInp &&
      event.target.name === "email" &&
      inputVals.email) ||
    ((inputVals.emailBool || inputVals.passwordBool) &&
      event.target.name === "name" &&
      !inputVals.name &&
      NameErrText.current != null &&
      NameErrText.current.style.display === "block") ||
    (inputVals.passwordBool &&
      inputVals.password.length < 8 &&
      event.target.name === "password")
  ) {
    return true;
  } else {
    return false;
  }
}

function BlurAllRedCombinations(
  inputVals: InputValsInterface,
  event: React.FocusEvent<HTMLInputElement>
) {
  if (
    (inputVals.nameBool && !inputVals.name && event.target.name === "name") ||
    ((inputVals.emailBool || inputVals.passwordBool) &&
      !inputVals.name &&
      event.target.name === "name") ||
    (inputVals.passwordBool &&
      !inputVals.password &&
      event.target.name === "password") ||
    ((inputVals.nameBool || inputVals.emailBool) &&
      !inputVals.password &&
      event.target.name === "password")
  ) {
    return true;
  } else {
    return false;
  }
}

function BlurWithTextCombinations(
  inputVals: InputValsInterface,
  event: React.FocusEvent<HTMLInputElement>
) {
  if (
    (event.target.name === "name" && inputVals.name !== "") ||
    (event.target.name === "email" && inputVals.email !== "") ||
    (event.target.name === "password" && inputVals.password !== "")
  ) {
    return true;
  } else {
    return false;
  }
}
function BlurWithoutTextCombinations(
  inputVals: InputValsInterface,
  event: React.FocusEvent<HTMLInputElement>
) {
  if (
    (inputVals.nameBool || inputVals.passwordBool) &&
    !inputVals.email &&
    event.target.name === "email"
  ) {
    return true;
  } else {
    return false;
  }
}

function invalidInputLengthChecker(
  inputVals: InputValsInterface,
  event: React.ChangeEvent<HTMLInputElement>
) {
  if (
    (event.target.name === "name" &&
      inputVals.name.length >= 30 &&
      event.target.value > inputVals.name) ||
    (event.target.name === "password" &&
      inputVals.password.length >= 15 &&
      event.target.value > inputVals.password)
  ) {
    return true;
  } else {
    return false;
  }
}

export {
  FocusAllRedCombinations,
  BlurAllRedCombinations,
  BlurWithTextCombinations,
  BlurWithoutTextCombinations,
  invalidInputLengthChecker,
};
