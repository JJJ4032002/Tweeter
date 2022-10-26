import { InputValsInterfacePartial } from "../Interfaces and Types/Interfaces";

function invalidInputLengthChecker(
  inputVals: InputValsInterfacePartial,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  if (
    (event.target.name === "name" &&
      inputVals.name &&
      inputVals.name.length >= 30 &&
      event.target.value > inputVals.name) ||
    (event.target.name === "password" &&
      inputVals.password &&
      inputVals.password.length >= 15 &&
      event.target.value > inputVals.password) ||
    (event.target.name === "bio" &&
      inputVals.bio &&
      inputVals.bio.length >= 160 &&
      event.target.value > inputVals.bio) ||
    (event.target.name === "location" &&
      inputVals.location &&
      inputVals.location.length >= 160 &&
      event.target.value > inputVals.location) ||
    (event.target.name === "website" &&
      inputVals.website &&
      inputVals.website.length >= 100 &&
      event.target.value > inputVals.website)
  ) {
    return true;
  } else {
    return false;
  }
}

export { invalidInputLengthChecker };
