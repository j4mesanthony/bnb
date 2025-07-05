import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import DataInput from "../DataInput";

describe("DataInput", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render with label", () => {
    render(
      <DataInput
        id="surname"
        label="Surname"
        value=""
        handleChange={() => {}}
      />
    );

    const input = screen.getByRole("textbox", { name: /surname/i });
    expect(input).toBeDefined();
  });

  it("should render without a label", () => {
    render(<DataInput id="email" value="" handleChange={() => {}} />);

    const input = document.getElementById("email");
    const label = screen.queryByLabelText("email");

    expect(input).toBeDefined();
    expect(label).toBeNull();
  });

  it("should render with value", () => {
    render(<DataInput id="email" value="" handleChange={() => {}} />);

    const input = document.getElementById("email");
    const label = screen.queryByLabelText("email");

    expect(input).toBeDefined();
    expect(label).toBeNull();
  });

  it("should call handleChange with input value on change", () => {
    const mockFn = vi.fn();
    render(
      <DataInput id="value" value="" label="Value" handleChange={mockFn} />
    );

    const input = screen.getByRole("textbox", { name: /value/i });
    expect(input).toBeDefined();

    const testValue = "test value";
    fireEvent.change(input, { target: { value: testValue } });

    expect(mockFn).toHaveBeenCalledWith(testValue);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
