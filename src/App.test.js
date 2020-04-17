import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form", () => {
  render(<ContactForm />);
});

test("shows labels", () => {
  const { getByLabelText } = render(<App />);
  const firstNameLabel = getByLabelText(/first name/i);
  const lastNameLabel = getByLabelText(/last name/i);
  const emailLabel = getByLabelText(/email/i);
  const textBoxLabel = getByLabelText(/message/i);
  expect(firstNameLabel).toBeVisible();
  expect(lastNameLabel).toBeVisible();
  expect(emailLabel).toBeVisible();
  expect(textBoxLabel).toBeVisible();
});

test("button exist and work", () => {
  const { getByTestId, getByLabelText } = render(<ContactForm />);
  const button = getByTestId("button");
  const firstNameLabel = getByLabelText(/first name/i);
  const lastNameLabel = getByLabelText(/last name/i);
  const emailLabel = getByLabelText(/email/i);
  const textBoxLabel = getByLabelText(/message/i);

  fireEvent.change(firstNameLabel, { target: { value: "Jennifer" } });
  fireEvent.change(lastNameLabel, { target: { value: "Weiner" } });
  fireEvent.change(emailLabel, { target: { value: "me@me.com" } });
  fireEvent.change(textBoxLabel, { target: { value: "test info" } });
  fireEvent.click(button);

  expect(firstNameLabel.value).toBe("Jennifer");
  expect(lastNameLabel.value).toBe("Weiner");
  expect(emailLabel.value).toBe("me@me.com");
  expect(textBoxLabel.value).toBe("test info");

  expect(button).toBeVisible();
});
