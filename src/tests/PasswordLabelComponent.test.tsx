import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import InputBlock from "../Components/Elements/Inputs/InputBlock";
import { SignUpFormPropsProvider } from "../Contexts/SignUpFormContext";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <SignUpFormPropsProvider>
        <InputBlock>
          Please enter a password greater than 8 characters
        </InputBlock>
      </SignUpFormPropsProvider>
    </BrowserRouter>
  );
});

it("AllBlueFocussed behaviour on input click", () => {
  const inputPassword = screen.getByLabelText("Password") as HTMLInputElement;
  userEvent.click(inputPassword);
  expect(screen.getByText("Password")).toHaveStyleRule("color", "#2da7ed");
  expect(screen.getByText("Password")).toHaveStyleRule("font-size", "0.8rem");
  expect(screen.getByText("Password")).toHaveStyleRule("top", "5%");
  expect(inputPassword.parentElement).toHaveStyleRule(
    "border-color",
    "#2da7ed"
  );
  expect(inputPassword.parentElement).toHaveStyleRule("border-width", "2px");
});
it("AllRedBlurred behaviour after after blurring the input which was initially typed", () => {
  const inputPassword = screen.getByLabelText("Password") as HTMLInputElement;
  userEvent.type(inputPassword, "Example");
  inputPassword.setSelectionRange(0, 7);
  userEvent.type(inputPassword, "{backspace}");
  userEvent.click(
    screen.getByText("Please enter a password greater than 8 characters")
  );
  expect(screen.getByText("Password")).toHaveStyleRule("color", "#536471");
  expect(screen.getByText("Password")).toHaveStyleRule("font-size", "1rem");
  expect(screen.getByText("Password")).toHaveStyleRule("top", "32%");
  expect(inputPassword.parentElement).toHaveStyleRule("border-color", "red");
  expect(inputPassword.parentElement).toHaveStyleRule("border-width", "1px");
});
it("Error text absent in document when Password length is greater than 8", () => {
  const inputPassword = screen.getByLabelText("Password") as HTMLInputElement;
  userEvent.type(inputPassword, "Example123");
  expect(inputPassword).toHaveValue("Example123");
  expect(
    screen.getByText("Please enter a password greater than 8 characters")
  ).toHaveStyle("display : none");
  expect(inputPassword.parentElement).toHaveStyleRule(
    "border-color",
    "#2da7ed"
  );
});
it("Error text present in document when Password length is less than 8", () => {
  const inputPassword = screen.getByLabelText("Password") as HTMLInputElement;
  userEvent.type(inputPassword, "Example");
  expect(inputPassword).toHaveValue("Example");
  expect(
    screen.getByText("Please enter a password greater than 8 characters")
  ).toHaveStyle("display : block");
  expect(inputPassword.parentElement).toHaveStyleRule("border-color", "red");
});
it("Error text present in document when Password Input is Empty", () => {
  const inputPassword = screen.getByLabelText("Password") as HTMLInputElement;
  userEvent.type(inputPassword, "Example");
  inputPassword.setSelectionRange(0, 7);
  userEvent.type(inputPassword, "{backspace}");
  expect(
    screen.getByText("Please enter a password greater than 8 characters")
  ).toHaveStyle("display : block");
  expect(inputPassword.parentElement).toHaveStyleRule("border-color", "red");
});
