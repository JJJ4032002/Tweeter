import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import LabelBlockComponent from "../Components/AuthenticationPageComponents/SignUpFormComponents/MiddleContainerComponents/LabelBlockComponent";
import { SignUpFormPropsProvider } from "../Contexts/SignUpFormContext";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <SignUpFormPropsProvider>
        <LabelBlockComponent type="email">
          Please enter a valid email
        </LabelBlockComponent>
      </SignUpFormPropsProvider>
    </BrowserRouter>
  );
});

describe("Input Email validation", () => {
  it("AllBlueFocussed when empty input initially clicked", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.click(inputEmail);
    expect(screen.getByText("Email")).toHaveStyleRule("color", "#2da7ed");
    expect(screen.getByText("Email")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Email")).toHaveStyleRule("top", "5%");
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Non-state behaviour after after blurring the input which was initially typed", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    inputEmail.setSelectionRange(0, 7);
    userEvent.type(inputEmail, "{backspace}");
    userEvent.click(screen.getByText("Please enter a valid email"));
    expect(screen.getByText("Email")).toHaveStyleRule("color", "#536471");
    expect(screen.getByText("Email")).toHaveStyleRule("font-size", "1rem");
    expect(screen.getByText("Email")).toHaveStyleRule("top", "32%");
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("WithTextBlurred behaviour after  blurring typed input", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    userEvent.click(screen.getByText("Please enter a valid email"));
    expect(screen.getByText("Email")).toHaveStyleRule("color", "#536471");
    expect(screen.getByText("Email")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Email")).toHaveStyleRule("top", "5%");
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("AllBlueFocussed after focussing the input which was initially typed", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    inputEmail.setSelectionRange(0, 7);
    userEvent.type(inputEmail, "{backspace}");
    expect(inputEmail).toHaveValue("");
    userEvent.click(inputEmail);
    expect(screen.getByText("Email")).toHaveStyleRule("color", "#2da7ed");
    expect(screen.getByText("Email")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Email")).toHaveStyleRule("top", "5%");
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Error text present in document when Email input is incorrectly filled", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    expect(inputEmail).toHaveValue("Example");
    expect(screen.getByText("Please enter a valid email")).toHaveStyle(
      "display : block"
    );
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "red");
  });
  it("Error absent from document when Email input is correctly filled", () => {
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example@123.com");

    expect(inputEmail).toHaveValue("Example@123.com");
    expect(screen.getByText("Please enter a valid email")).toHaveStyle(
      "display : none"
    );
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
  });
});
