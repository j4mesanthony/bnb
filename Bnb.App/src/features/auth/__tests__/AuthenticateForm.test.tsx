import { describe, it, expect, afterEach, vi } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
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

  it("should call handleSubmit function with updated state", () => {
    const mockFn = vi.fn();
    render(<AuthenticateForm handleSubmit={mockFn} />);

    const emailField = screen.getByRole("textbox", { name: /email/i });
    const passwordField = screen.getByLabelText("Password");
    const email = "fds@test.com";
    const password = "Password12345678";

    fireEvent.change(emailField, { target: { value: email } });
    fireEvent.change(passwordField, { target: { value: password } });

    const button = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledOnce();
    expect(mockFn).toHaveBeenCalledWith({ email, password });
  });

  // it should disable the Login button if email field is empty
  // it should disable the Login button if password field is empty
});
