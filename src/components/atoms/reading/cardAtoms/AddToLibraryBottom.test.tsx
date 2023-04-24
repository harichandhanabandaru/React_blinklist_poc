import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddToLibraryBottom from "./AddToLibraryBottom";

describe("AddToLibraryBottom", () => {
  it("should render an add button", () => {
    const { getByText } = render(<AddToLibraryBottom cardId="123" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Add to library")).toBeInTheDocument();
  });

  it("should call handleChange when add button is clicked", () => {
    const handleChange = jest.fn();
    const { getByText } = render(<AddToLibraryBottom cardId="123" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("Add to library"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
