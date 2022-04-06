import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { AuthenticationPage } from "./AuthenticationPage";
describe("Name Input validation", () => {
  it("LabelBlock border thick and blue when empty input initially clicked", () => {
    render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.click(inputName);
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#2da7ed");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Border thin and red after after blurring the input which was initially typed", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    userEvent.click(getByText("What's your name"));
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("Border thin and gray after after blurring typed the input", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    userEvent.click(getByText("What's your name"));
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("Border thick and red after after focussing the input which was initially typed", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    userEvent.click(getByText("What's your name"));
    userEvent.click(inputName);
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
    expect(inputName.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Error text absent from document when Name input is filled", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    expect(inputName).toHaveValue("Example");
    expect(getByText("What's your name")).toHaveStyle("display : none");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "#2da7ed");
  });
  it("Error text present in document when Name input is empty", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputName = screen.getByLabelText("Name") as HTMLInputElement;
    userEvent.type(inputName, "Example");
    inputName.setSelectionRange(0, 7);
    userEvent.type(inputName, "{backspace}");
    expect(inputName).toHaveValue("");
    expect(getByText("What's your name")).toHaveStyle("display : block");
    expect(inputName.parentElement).toHaveStyleRule("border-color", "red");
  });
});

describe("Input Email validation", () => {
  it("LabelBlock border thick and blue when empty input initially clicked", () => {
    render(<AuthenticationPage></AuthenticationPage>);
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.click(inputEmail);
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "2px");
  });
  it("Border thin and gray after after blurring the input which was initially typed", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    inputEmail.setSelectionRange(0, 7);
    userEvent.type(inputEmail, "{backspace}");

    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "1px");
  });
  it("Border thin and gray after  blurring typed the input", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    userEvent.click(getByText("Please enter a valid email"));
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#cfd9de");
    expect(inputEmail.parentElement).toHaveStyleRule("border-width", "1px");
  });
  // it("Border thick and blue after after focussing the input which was initially typed", () => {
  //   const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
  //   const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
  //   userEvent.type(inputEmail, "Example");
  //   inputEmail.setSelectionRange(0, 7);
  //   userEvent.type(inputEmail, "{backspace}");
  //   expect(inputEmail).toHaveValue("");
  //   userEvent.click(inputEmail);
  //   expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
  //   expect(inputEmail.parentElement).toHaveStyleRule("border-width", "2px");
  // });
  it("Error text present in document when Email input is incorrectly filled", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example");
    expect(inputEmail).toHaveValue("Example");
    expect(getByText("Please enter a valid email")).toHaveStyle(
      "display : block"
    );
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "red");
  });
  it("Error absent from document when Email input is correctly filled", () => {
    const { getByText } = render(<AuthenticationPage></AuthenticationPage>);
    const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;
    userEvent.type(inputEmail, "Example@123.com");

    expect(inputEmail).toHaveValue("Example@123.com");
    expect(getByText("Please enter a valid email")).toHaveStyle(
      "display : none"
    );
    expect(inputEmail.parentElement).toHaveStyleRule("border-color", "#2da7ed");
  });
});
