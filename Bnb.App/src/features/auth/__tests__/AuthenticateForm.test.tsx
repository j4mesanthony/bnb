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
    const pwdField = screen.getByLabelText("Password");
    const confirmPwdField = screen.getByLabelText("Confirm Password");
    const email = "fds@test.com";
    const password = "Password12345678";

    fireEvent.change(emailField, { target: { value: email } });
    fireEvent.change(pwdField, { target: { value: password } });
    fireEvent.change(confirmPwdField, { target: { value: password } });

    const button = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({ email, password });
  });

  it("should disable the Login button if the password fields are empty", () => {
    render(<AuthenticateForm handleSubmit={() => {}} />);

    const emailField = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(emailField, { target: { value: "test@email.com" } });

    const button = screen.getByRole("button", {
      name: /Login/i,
    }) as HTMLButtonElement;

    expect(button.disabled).toBe(true);
  });

  it("should disable the Login button if the email field is empty", () => {
    render(<AuthenticateForm handleSubmit={() => {}} />);

    const pwdField = screen.getByLabelText("Password");
    const confirmPwdField = screen.getByLabelText("Confirm Password");
    fireEvent.change(pwdField, { target: { value: "test@email.com" } });
    fireEvent.change(confirmPwdField, { target: { value: "test@email.com" } });

    const button = screen.getByRole("button", {
      name: /Login/i,
    }) as HTMLButtonElement;

    expect(button.disabled).toBe(true);
  });

  it("should disable the Login button if the password fields do not match", () => {
    render(<AuthenticateForm handleSubmit={() => {}} />);

    const emailField = screen.getByRole("textbox", { name: /email/i });
    const pwdField = screen.getByLabelText("Password");
    const confirmPwdField = screen.getByLabelText("Confirm Password");
    fireEvent.change(emailField, { target: { value: "test@email.com" } });
    fireEvent.change(pwdField, { target: { value: "Password12345" } });
    fireEvent.change(confirmPwdField, {
      target: { value: "Password54321" },
    });

    const button = screen.getByRole("button", {
      name: /Login/i,
    }) as HTMLButtonElement;

    expect(button.disabled).toBe(true);
  });

  it("should disable the Login button if the provided email is invalid", () => {
    render(<AuthenticateForm handleSubmit={() => {}} />);

    const emailField = screen.getByRole("textbox", { name: /email/i });
    const pwdField = screen.getByLabelText("Password");
    const confirmPwdField = screen.getByLabelText("Confirm Password");
    fireEvent.change(emailField, { target: { value: "test@ed" } });
    fireEvent.change(pwdField, { target: { value: "Password51268741" } });
    fireEvent.change(confirmPwdField, {
      target: { value: "Password51268741" },
    });

    const button = screen.getByRole("button", {
      name: /Login/i,
    }) as HTMLButtonElement;

    expect(button.disabled).toBe(true);
  });
});
