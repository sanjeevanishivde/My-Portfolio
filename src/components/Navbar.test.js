// src/components/__tests__/Navbar.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
