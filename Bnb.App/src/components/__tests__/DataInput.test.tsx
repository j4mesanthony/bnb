import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DataInput from "../DataInput";

describe("DataInput", () => {
  it("should render with label", () => {
    render(<DataInput id="surname" label="Surname" handleChange={() => {}} />);

    const input = screen.getByRole("textbox", { name: /surname/i });
    expect(input).toBeDefined();
  });

  it("should render without a label", () => {
    render(<DataInput id="email" handleChange={() => {}} />);

    const input = document.getElementById("email");
    const label = screen.queryByLabelText("email");

    expect(input).toBeDefined();
    expect(label).toBeNull();
  });

  it("should call handleChange with input value on change", () => {
    const mockFn = vi.fn();
    render(<DataInput id="value" label="Value" handleChange={mockFn} />);

    const input = screen.getByRole("textbox", { name: /value/i });
    expect(input).toBeDefined();

    fireEvent.change(input, { target: { value: "test value" } });

    expect(mockFn).toHaveBeenCalledWith("test value");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
