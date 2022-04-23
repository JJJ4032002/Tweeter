import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import LabelBlockComponent from "../Components/AuthenticationPageComponents/SignUpFormComponents/MiddleContainerComponents/LabelBlockComponent";
import { SignUpFormPropsProvider } from "../Contexts/SignUpFormContext";
import "jest-styled-components";

beforeEach(() => {
  render(
    <SignUpFormPropsProvider>
      <LabelBlockComponent type="name">What's your name</LabelBlockComponent>
    </SignUpFormPropsProvider>
  );
});

describe("Name Input validation", () => {
  it("AllBlueFocussed behaviour on input click", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.click(inputName);
    expect(screen.getByText("Name")).toHaveStyleRule("color", "#2da7ed");
    expect(screen.getByText("Name")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Name")).toHaveStyleRule("top", "5%");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#2da7ed");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("AllRedBlurred behaviour after after blurring the input which was initially typed", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    userEvent.click(screen.getByText("What's your name"));
    expect(screen.getByText("Name")).toHaveStyleRule("color", "#536471");
    expect(screen.getByText("Name")).toHaveStyleRule("font-size", "1rem");
    expect(screen.getByText("Name")).toHaveStyleRule("top", "32%");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("WithTextBlurred behaviour after after blurring the typed input", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    userEvent.click(screen.getByText("What's your name"));
    expect(screen.getByText("Name")).toHaveStyleRule("color", "#536471");
    expect(screen.getByText("Name")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Name")).toHaveStyleRule("top", "5%");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("AllRedFocussed behaviour after focussing the input which was initially typed", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    userEvent.click(screen.getByText("What's your name"));
    userEvent.click(inputName);
    expect(screen.getByText("Name")).toHaveStyleRule("color", "red");
    expect(screen.getByText("Name")).toHaveStyleRule("font-size", "0.8rem");
    expect(screen.getByText("Name")).toHaveStyleRule("top", "5%");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Error text absent from document when Name input is filled", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    expect(inputName).toHaveValue("Example");
    expect(screen.getByText("What's your name")).toHaveStyle("display : none");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#2da7ed");
  });
  it("Error text present in document when Name input is empty", () => {
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    expect(inputName).toHaveValue("");
    expect(screen.getByText("What's your name")).toHaveStyle("display : block");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
  });
});
