import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Bottom from "./Bottom";

describe("Bottom component", () => {
  it("renders correctly", () => {
    render(<Bottom cardId="1" />);
    expect(screen.getByText("finished")).toBeInTheDocument();
    expect(screen.getByText("read again")).toBeInTheDocument();
    expect(screen.getByTestId("bottom")).toHaveClass("bottom");
  });

  it("handles click on 'finished' button", () => {
    sessionStorage.setItem("libraryTab", "current");
    sessionStorage.setItem("currentReading", "[1,2,3]");
    sessionStorage.setItem("finishedReading", "[4,5]");
    const handlechangeMock = jest.fn();
    render(<Bottom cardId="1" />);
    fireEvent.click(screen.getByText("finished"));
    expect(handlechangeMock).toHaveBeenCalled();
    expect(sessionStorage.getItem("currentReading")).toEqual("[2,3]");
    expect(sessionStorage.getItem("finishedReading")).toEqual("[4,5,1]");
    expect(screen.queryByText("finished")).not.toBeInTheDocument();
  });

  it("handles click on 'read again' button", () => {
    sessionStorage.setItem("libraryTab", "finished");
    sessionStorage.setItem("currentReading", "[2,3]");
    sessionStorage.setItem("finishedReading", "[1,4,5]");
    const handlereadMock = jest.fn();
    const jsonMock = {
      books: [
        {
          coverImage: "1",
          title: "Book 1",
          author: "Author 1",
          timeToRead: "10 min",
          finishedReading: true,
        },
        {
          coverImage: "2",
          title: "Book 2",
          author: "Author 2",
          timeToRead: "15 min",
          finishedReading: false,
        },
      ],
    };
    jest.mock("../../../../data.json", () => jsonMock);
    render(<Bottom cardId="1" />);
    fireEvent.click(screen.getByText("read again"));
    expect(handlereadMock).toHaveBeenCalled();
    expect(sessionStorage.getItem("currentReading")).toEqual("[2,3,1]");
    expect(sessionStorage.getItem("finishedReading")).toEqual("[4,5]");
    expect(jsonMock.books[0].finishedReading).toBeFalsy();
  });
});
