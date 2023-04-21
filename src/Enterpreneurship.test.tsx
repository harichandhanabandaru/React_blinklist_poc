import "@testing-library/jest-dom";
import Enterpreneurship from "./components/organisms/enterpreneurship/Enterpreneurship";
import { BrowserRouter } from "react-router-dom";
import {
  cleanup,
  fireEvent,
  getByText,
  queryByText,
  render,
} from "@testing-library/react";
import Banner from "./components/organisms/enterpreneurship/Banner";
import EntrepreneurshipPage from "./components/pages/EntrepreneurshipPage";

afterEach(cleanup);
afterEach(() => { window.sessionStorage.clear(); })
describe("App", () => {
  test("render enterpreneurship", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Enterpreneurship />
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Explore Books on/i)).toBeInTheDocument();
  });

  test("render enterpreneurship page", () => {
    render(
      <BrowserRouter>
        <EntrepreneurshipPage />
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementById("searchbar") as HTMLElement).toBeVisible();
  });

  test("render searchBar", () => {
    render(
      <BrowserRouter>
        <Enterpreneurship />
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementById("searchbar") as HTMLElement).toBeVisible();
  });


  test("render book categories", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Enterpreneurship />
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Trending Blinks/i)).toBeInTheDocument();

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Just Added/i)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Featured/i)).toBeInTheDocument();
  });

  test("banner image rendering", () => {
    render(<Banner />)
    // eslint-disable-next-line testing-library/no-node-access
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("banner");
  });



});

