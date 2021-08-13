import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

beforeEach(() => {
  render(<Login />);
});

describe("When the login page is mounted", () => {
  test("Should exist login heading", () => {
    expect(screen.getByRole("heading", { name: /login user/i }));
  });

  test("Should be true", () => {
    screen.debug();
  });

  test("Should exist inputs to login", () => {
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
  
  test("Should exist a submit button", () => {
    const submitBtn = screen.getByRole("button", { name: /sign in/i });
    expect(submitBtn).toBeInTheDocument();

  });
});
