import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import LabelBlockComponent from "./LabelBlockComponent";

describe("Render label component", () => {
  it("Renders name Label block correctly", () => {
    const { container } = render(
      <LabelBlockComponent type="name">What's your name</LabelBlockComponent>
    );
    expect(container).toMatchSnapshot();
  });
  it("Renders email Label block correctly", () => {
    const { container } = render(
      <LabelBlockComponent type="email">
        Please enter a valid email
      </LabelBlockComponent>
    );
    expect(container).toMatchSnapshot();
  });
});
