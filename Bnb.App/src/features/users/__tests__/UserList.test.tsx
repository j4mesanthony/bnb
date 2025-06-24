import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserList from "../components/UserList";
import type { UserModel } from "../models/UserModel";

describe("UserList", () => {
  it("renders without any users", () => {
    render(<UserList users={[]} />);
    const heading = screen.getByRole("heading", { name: /users/i });
    expect(heading.textContent).toBe("No users");
  });

  it("renders with one user", () => {
    const user: UserModel = {
      id: 1,
      age: 39,
      email: "test@test.com",
      firstName: "James",
      lastName: "Anthony",
    };
    render(<UserList users={[user]} />);
    const heading = screen.getByText("1 User");
    expect(heading).toBeDefined();
  });

  it("renders with multiple users", () => {
    const user1: UserModel = {
      id: 1,
      age: 39,
      email: "test@test.com",
      firstName: "Test",
      lastName: "User",
    };

    const user2: UserModel = {
      id: 2,
      age: 38,
      email: "test@test.com",
      firstName: "Joe",
      lastName: "Bloggs",
    };
    render(<UserList users={[user1, user2]} />);
    const heading = screen.getByText("2 Users");
    expect(heading).toBeDefined();
  });
});
