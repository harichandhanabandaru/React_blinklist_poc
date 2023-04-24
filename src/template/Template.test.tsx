import { render, screen } from "@testing-library/react";
import Template from "./Template";

describe("Template", () => {
  test("renders main page", () => {
    render(<Template page="main" />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  test("renders entrepreneurship page", () => {
    render(<Template page="entrepreneurship" />);
    expect(
      screen.getByRole("heading", { name: /entrepreneurship/i })
    ).toBeInTheDocument();
  });

  test("renders book detail page", () => {
    const bookId = "123";
    render(<Template page="bookdetail" bookid={bookId} />);
    expect(
      screen.getByRole("heading", { name: /book detail/i })
    ).toBeInTheDocument();
    expect(screen.getByText(`Book ID: ${bookId}`)).toBeInTheDocument();
  });
});
