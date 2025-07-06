import { describe, it, expect, afterEach, vi } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import AuthenticateForm from "../components/AuthenticateForm";

const setup = (handleSubmit = () => {}) => {
  render(<AuthenticateForm handleSubmit={handleSubmit} />);

  const emailField = screen.getByRole("textbox", { name: /email/i });
  const passwordField = screen.getByLabelText("Password");
  const confirmPasswordField = screen.getByLabelText("Confirm Password");
  const loginButton = screen.getByRole("button", {
    name: /Login/i,
  }) as HTMLButtonElement;
  return { emailField, passwordField, confirmPasswordField, loginButton };
};

const fillFields = ({
  email = "",
  password = "",
  confirmPassword = "",
  emailField,
  passwordField,
  confirmPasswordField,
}: {
  email?: string;
  password?: string;
  confirmPassword?: string;
  emailField: HTMLElement;
  passwordField: HTMLElement;
  confirmPasswordField: HTMLElement;
}) => {
  if (email) fireEvent.change(emailField, { target: { value: email } });
  if (password)
    fireEvent.change(passwordField, { target: { value: password } });
  if (confirmPassword)
    fireEvent.change(confirmPasswordField, {
      target: { value: confirmPassword },
    });
};

describe("AuthenticateForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render email, password and confirm password fields", () => {
    const { emailField, passwordField, confirmPasswordField } = setup();

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
    expect(confirmPasswordField).toBeDefined();
  });

  it("should call handleSubmit function with updated state", () => {
    const mockFn = vi.fn();
    const { emailField, passwordField, confirmPasswordField, loginButton } =
      setup(mockFn);
    const email = "fds@test.com";
    const password = "Password12345678";

    fillFields({
      email,
      password,
      confirmPassword: password,
      emailField,
      passwordField,
      confirmPasswordField,
    });

    fireEvent.click(loginButton);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({ email, password });
  });

  it("should disable the Login button if the password fields are empty", () => {
    const { emailField, loginButton } = setup();

    fillFields({
      email: "test@email.com",
      emailField,
      passwordField: emailField,
      confirmPasswordField: emailField,
    });

    expect(loginButton.disabled).toBe(true);
  });

  it("should disable the Login button if the email field is empty", () => {
    const { passwordField, confirmPasswordField, loginButton } = setup();

    fillFields({
      password: "test@email.com",
      confirmPassword: "test@email.com",
      emailField: passwordField,
      passwordField,
      confirmPasswordField,
    });

    expect(loginButton.disabled).toBe(true);
  });

  it("should disable the Login button if the password fields do not match", () => {
    const { emailField, passwordField, confirmPasswordField, loginButton } =
      setup();

    fillFields({
      email: "test@email.com",
      password: "Password12345",
      confirmPassword: "Password54321",
      emailField,
      passwordField,
      confirmPasswordField,
    });

    expect(loginButton.disabled).toBe(true);
  });

  it("should disable the Login button if the provided email is invalid", () => {
    const { emailField, passwordField, confirmPasswordField, loginButton } =
      setup();

    fillFields({
      email: "test@ed",
      password: "Password51268741",
      confirmPassword: "Password51268741",
      emailField,
      passwordField,
      confirmPasswordField,
    });

    expect(loginButton.disabled).toBe(true);
  });
});
