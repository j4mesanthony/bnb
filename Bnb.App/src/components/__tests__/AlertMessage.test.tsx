import { describe, it, expect, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import AlertMessage from "../AlertMessage";
import { AlertType } from "../../consts/AlertType";

describe("AlertMesage", () => {
  afterEach(cleanup);

  it("should render correctly with default props", () => {
    const message = "Error Message";
    render(<AlertMessage>{message}</AlertMessage>);
    const alert = screen.getByRole("alert", { name: message });

    expect(alert).toBeDefined();
    expect(alert.className).includes(
      "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
    );
  });

  it("should render as a warning", () => {
    render(
      <AlertMessage type={AlertType.Warning}>This is a warning</AlertMessage>
    );
    const alert = screen.getByRole("alert", { name: /This is a warning/i });

    expect(alert).toBeDefined();
    expect(alert.className).includes(
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100"
    );
  });

  it("should render as an error", () => {
    render(
      <AlertMessage type={AlertType.Error}>This is an error</AlertMessage>
    );
    const alert = screen.getByRole("alert", { name: /This is an error/i });

    expect(alert).toBeDefined();
    expect(alert.className).includes(
      "bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-100"
    );
  });

  it("should render as a success message", () => {
    render(<AlertMessage type={AlertType.Success}>Success!</AlertMessage>);
    const alert = screen.getByRole("alert", { name: /Success/i });

    expect(alert).toBeDefined();
    expect(alert.className).includes(
      "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
    );
  });

  it("should render the error boundary", () => {
    const invalidAction = 9;
    render(
      <AlertMessage type={invalidAction}>Something went wrong!</AlertMessage>
    );
    const alert = screen.getByRole("alert", { name: /Something went wrong!/i });

    expect(alert).toBeDefined();
    expect(alert.className).includes(
      "bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-100"
    );
  });
});
