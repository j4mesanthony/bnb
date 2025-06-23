import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import DataInput from "../DataInput";

describe("DataInput", () => {
  it("renders component with label", () => {
    const { getByText, getByRole } = render(
      <DataInput id="surname" label="Surname" handleChange={() => {}} />
    );

    const label = getByText("Surname");
    const input = getByRole("textbox");

    expect(label).toBeDefined();
    expect(input).toBeDefined();
  });
});
