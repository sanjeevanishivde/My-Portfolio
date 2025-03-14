import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";

test("renders contact form", () => {
  render(<Contact />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("submits contact form", () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/thank you/i)).toBeInTheDocument();
});
