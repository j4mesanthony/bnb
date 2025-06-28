import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PrimaryButton from "../PrimaryButton";

describe("PrimaryButton", () => {
  it("should render with default slot content", () => {
    render(<PrimaryButton />);
    const element = screen.getByRole("button", { name: /PrimaryButton/i });
    expect(element).toBeDefined();
  });
  it("should render with provided slot content", () => {
    render(<PrimaryButton>Save</PrimaryButton>);
    const element = screen.getByRole("button", { name: /save/i });
    expect(element).toBeDefined();
  });
  // it("should emit a click event", () => {
  //   render(<PrimaryButton>Click Me</PrimaryButton>);
  //   const element = screen.getByRole("button", { name: /click me/i });
  //   expect(element).toBeDefined();
  // });
});
