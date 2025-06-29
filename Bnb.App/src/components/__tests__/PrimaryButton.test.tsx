import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PrimaryButton from "../PrimaryButton";

describe("PrimaryButton", () => {
  it("should render with default slot content", () => {
    render(<PrimaryButton handleClick={() => {}} />);
    const element = screen.getByRole("button", { name: /PrimaryButton/i });
    expect(element).toBeDefined();
  });

  it("should render with provided slot content", () => {
    render(<PrimaryButton handleClick={() => {}}>Save</PrimaryButton>);
    const element = screen.getByRole("button", { name: /save/i });
    expect(element).toBeDefined();
  });

  it("should emit a click event", () => {
    const mockFn = vi.fn();
    render(<PrimaryButton handleClick={mockFn}>Click Me</PrimaryButton>);
    const element = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(element);
    expect(element).toBeDefined();
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
