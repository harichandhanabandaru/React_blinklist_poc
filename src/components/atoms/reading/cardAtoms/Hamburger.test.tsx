import { render, screen } from "@testing-library/react";
import Hamburger from "./Hamburger";

describe("Hamburger", () => {
  test("renders the hamburger image", () => {
    render(<Hamburger />);
    const hamburgerElement = screen.getByAltText("hamburger");
    expect(hamburgerElement).toBeInTheDocument();
    expect(hamburgerElement.tagName).toBe("IMG");
  });

  test("applies the correct class", () => {
    render(<Hamburger />);
    const hamburgerElement = screen.getByAltText("hamburger");
    expect(hamburgerElement).toHaveClass("hamburger");
  });
});
