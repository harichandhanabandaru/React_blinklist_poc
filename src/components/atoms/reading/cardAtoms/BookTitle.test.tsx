import React from "react";
import { render } from "@testing-library/react";
import BookTitle from "./BookTitle";

test("renders book title correctly", () => {
  const title = "Test Book Title";
  const { getByText } = render(<BookTitle title={title} />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const bookTitle = getByText(title);
  expect(bookTitle).toBeInTheDocument();
});
