import { InputValsInterface } from "../Interfaces and Types/Interfaces";

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

export { invalidInputLengthChecker };
