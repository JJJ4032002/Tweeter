import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { AuthenticationPage } from "./AuthenticationPage";

it("Name Input validation", () => {
  render(<AuthenticationPage></AuthenticationPage>);
  const inputName = screen.getByLabelText("Name");
  userEvent.type(inputName, "Example");
  expect(inputName).toHaveValue("Example");
});
