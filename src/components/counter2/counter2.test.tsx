import { render, screen } from "@testing-library/react";
import Counter2 from "./Counter2";
import userEvent from "@testing-library/user-event";

describe("counter two", () => {
  test("display correct values", () => {
    render(<Counter2 count={0} />);
    const counterValue = screen.getByRole("heading");
    expect(counterValue).toBeTruthy();
  });

  test("test if the functions are being called", async () => {
    userEvent.setup();

    const incrementfunc = jest.fn();
    const decrementfunc = jest.fn();

    render(
      <Counter2
        count={0}
        handleincrement={incrementfunc}
        handledecrement={decrementfunc}
      />
    );

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });
    // expect(incrementBtn).toBeInTheDocument();
    // expect(decrementBtn).toBeInTheDocument();

    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(decrementBtn);

    expect(incrementfunc).toHaveBeenCalledTimes(2);
    expect(decrementfunc).toBeCalledTimes(1);
  });
});
