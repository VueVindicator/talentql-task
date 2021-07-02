import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import renderer from "react-test-renderer";
import Shapes from "../components/shapes/shapes";

describe("< Shapes />", () => {
  test("red checkbox value to change", () => {
    render(<Shapes />);
    const red = screen.getByTestId("red");
    expect(red).toBeChecked();
    fireEvent.click(red);
    expect(red).not.toBeChecked();
  });

  test("round checkbox value to change", () => {
    render(<Shapes />);
    const round = screen.getByTestId("round");
    expect(round).toBeChecked();
    fireEvent.click(round);
    expect(round).not.toBeChecked();
  });
});
