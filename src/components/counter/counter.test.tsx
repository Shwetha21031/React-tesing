import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

import user from "@testing-library/user-event";
describe("counter", () => {
  test("check if rendered properly", () => {
    render(<Counter />);
    const countNumber = screen.getByRole("heading");
    expect(countNumber).toBeInTheDocument();

    const countButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(countButton).toBeInTheDocument();
  });

  test("initial value 0", () => {
    render(<Counter />);
    const countNumber = screen.getByRole("heading");
    expect(countNumber).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
