import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import DataInput from "../DataInput";

describe("DataInput", () => {
  it("renders component with label", () => {
    const { getByTestId } = render(
      <DataInput label="Surname" handleChange={() => {}} />
    );

    const label = getByTestId("datainput-label");
    const input = getByTestId("datainput-input");

    expect(label).toBeDefined();
    expect(input).toBeDefined();
  });
});
