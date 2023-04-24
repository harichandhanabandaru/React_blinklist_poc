import { render, screen } from "@testing-library/react";
import Time from "./Time";

describe("Time", () => {
  test("renders the time to read", () => {
    const timeToRead = "5 min";
    render(<Time timeToRead={timeToRead} />);
    expect(screen.getByText(timeToRead)).toBeInTheDocument();
  });

  test("applies the correct class", () => {
    const timeToRead = "5 min";
    render(<Time timeToRead={timeToRead} />);
    const timeElement = screen.getByText(timeToRead);
    expect(timeElement).toHaveClass("timeStyle");
  });
});
