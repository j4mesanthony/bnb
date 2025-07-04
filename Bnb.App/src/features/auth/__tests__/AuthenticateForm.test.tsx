import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import AuthenticateForm from "../components/AuthenticateForm";

describe("AuthenticateForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render email, password and confirm password fields", () => {
    render(<AuthenticateForm handleSubmit={() => {}} />);

    const emailField = screen.getByRole("textbox", { name: /email/i });
    const passwordField = screen.getByLabelText("Password");
    const confirmPasswordField = screen.getByLabelText("Confirm Password");

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
    expect(confirmPasswordField).toBeDefined();
  });

  // it("should call handleSubmit function with updated state", () => {
  //   const mockFn = vi.fn();
  //   render(<AuthenticateForm handleSubmit={mockFn} />);

  //   const emailField = screen.getByRole("textbox", { name: /email/i });
  //   fireEvent.change(emailField, { target: { value: "fds@test.com" } });

  //   const button = screen.getByRole("button", { name: /Login/i });
  //   fireEvent.click(button);

  //   expect(mockFn).toHaveBeenCalledOnce();
  // });
});
