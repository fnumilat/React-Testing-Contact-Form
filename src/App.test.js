import React from "react";
import { render, getByPlaceholderText } from "@testing-library/react";
import App from "./App";
import ContactForm, { register, handleSubmit } from './components/ContactForm';
import 'mutationobserver-shim';



test("renders App without crashing", () => {
  render(<App />);
});


test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("label shows it's text", () => {
  const { getByText } = render(<ContactForm />);
  getByText(/First Name*/i);
});


describe("making sure that all inputs are required", () => {
  it("all inputs requires the data", () => {
    expect(register).toBeRequired;
  })
});

describe("handleSubmit listener expected in the document", ( ) => {
  it("making sure the handleSubmit listener is in the document", () => {
    expect(handleSubmit).toBeInTheDocument;
  })
});




