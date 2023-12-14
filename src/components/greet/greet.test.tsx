import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test('greet rendered correctly',()=>{
//     render(<Greet/>)
//     const TextElement = screen.getByText(/helloo!!!/i)
//     expect(TextElement).toBeInTheDocument()
// })

describe("Greet", () => {
  test("rendering correctly", () => {
    render(<Greet />);
    const TextElement = screen.getByText(/Hello/i);
    expect(TextElement).toBeInTheDocument();
  });

  // describe("Nested", () => {
  //   it("rendering prop", () => {
  //     render(<Greet name="Guest" />);
  //     const TextElement = screen.getByText("Hello Guest");
  //     expect(TextElement).toBeInTheDocument();
  //   });
  // });
});
