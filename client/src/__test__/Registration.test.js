import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Registro from "../pages/Registro";

beforeEach(() => {
  render(
    <Router>
      <Registro />
    </Router>
  );
});

describe("Before registration", () => {
  test("Should validate inputs", () => {
    /* in progress */
  });
  test("Should show a validation message", () => {
    const submitBtn = screen.getByRole("button", { name: /register/i });
    expect(submitBtn).toBeDisabled();
    fireEvent.click(submitBtn);
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});

describe("When the page is mounted", () => {
  test("Should render page", () => {
    screen.debug();
  });

  test("Should exist register tittle", () => {
    expect(screen.getByRole("heading", { name: /register user/i }));
  });
});
