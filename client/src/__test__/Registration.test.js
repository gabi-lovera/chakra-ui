import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Registro from "../pages/Registro";

describe("Registro", () => {
  test("Debe existir..", () => {
    render(
      <Router>
        <Registro />
      </Router>
    );
    screen.debug();
  });
});