import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import InputBlock from "../Components/Elements/Inputs/InputBlock";

describe("Render label component", () => {
  it("Renders name Label block correctly", () => {
    const { container } = render(<InputBlock>What's your name</InputBlock>);
    expect(container).toMatchSnapshot();
  });
  it("Renders email Label block correctly", () => {
    const { container } = render(
      <InputBlock>Please enter a valid email</InputBlock>
    );
    expect(container).toMatchSnapshot();
  });
  it("Renders password Label block correctly", () => {
    const { container } = render(
      <InputBlock>Please enter a password greater than 8 characters</InputBlock>
    );
    expect(container).toMatchSnapshot();
  });
});
