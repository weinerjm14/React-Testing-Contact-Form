import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form", () => {
  render(<ContactForm />);
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

test("button exist and work", () => {
  const { getByTestId, getByText } = render(<ContactForm />);
  const button = getByTestId("button");
  const firstNameLabel = getByText(/first name/i);
  const lastNameLabel = getByText(/last name/i);
  const emailLabel = getByText(/email/i);
  const textBoxLabel = getByText(/message/i);
  act(() => {
    fireEvent.change(firstNameLabel, { value: "Jennifer" });
  });
  fireEvent.click(button);
  expect(firstNameLabel.value).toBe("Jennifer");
  expect(button).toBeVisible();
});
