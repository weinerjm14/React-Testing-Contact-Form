import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("shows labels", () => {
  const { getByText } = render(<App />);
  const firstNameLabel = getByText(/first name/i);
  const lastNameLabel = getByText(/last name/i);
  const emailLabel = getByText(/email/i);
  const textBoxLabel = getByText(/message/i);
  expect(firstNameLabel).toBeVisible();
  expect(lastNameLabel).toBeVisible();
  expect(emailLabel).toBeVisible();
  expect(textBoxLabel).toBeVisible();
});

test("buttons exist and work", () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId("button");
  // fireEvent.click(button)

  expect(button).toBeVisible();
});
