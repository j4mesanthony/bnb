import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserList from "../components/UserList";

describe("UserList", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<UserList users={[]} />);
    expect(getByText("Users:")).toBeDefined();
  });
});
