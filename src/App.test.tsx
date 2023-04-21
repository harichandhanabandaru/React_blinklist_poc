import React from "react";
import "@testing-library/jest-dom";
//import { shallow, configure, mount } from "Enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//use adapter

import {
  cleanup,
  fireEvent,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import Header from "./components/organisms/header/Header";
import Avator from "./components/molecules/Avator";
import ExploreButton from "./components/atoms/reading/navAtoms/ExploreButton";
import ExtendedNav from "./components/organisms/header/ExtendedNav";
import { BrowserRouter, MemoryRouter, Route, Router, Routes } from "react-router-dom";
import BookDetail from "./components/organisms/bookDetail/BookDetail";
import BookDetailPage from "./components/pages/BookDetailPage";
import { createMemoryHistory } from "history";
import MyLibrary from "./components/atoms/reading/navAtoms/MyLibrary";
import Template from "./template/Template";
import { shallow } from "enzyme";
import SearchBar from "./components/molecules/enterpreneurship/SearchBar";

Enzyme.configure({ adapter: new Adapter() });
afterEach(cleanup);
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });

  test("render My Library Heading", () => {
    render(<App />);
    const linkElement = screen.getByText("My Library");
    expect(linkElement).toBeInTheDocument();
  });

  test("Current Reading", () => {
    render(<App />);
    const current = screen.getByText("Currently Reading");
    const finished = screen.getByText("Finished");

    expect(current).toBeInTheDocument();
    expect(finished).toBeInTheDocument();
  });

  test("Explore coponent render", () => {
    const component = shallow(<Header />);
    component.find('ExploreButton');
  });

  test("Explore Button text", () => {
    const component = shallow(<ExploreButton />);
    expect(component.text().includes('Explore')).toBe(true);
  });

  test("My Library text", () => {
    const component = shallow(<Header />);
    component.find('MyLibrary');
  });

  test("Avator test", () => {
    const { getByAltText } = render(<Avator />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    getByAltText("Account");
  });



  it("avator image rendering", () => {
    render(<Avator />);
    // eslint-disable-next-line testing-library/no-node-access
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("avator");
  });



  it("Test click event", () => {
    render(
      <BrowserRouter>
        <ExploreButton />
        <ExtendedNav />
      </BrowserRouter>
    );
    const button = screen.getByRole("link");
    // eslint-disable-next-line testing-library/no-node-access
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      document.getElementById("extended-nav") as HTMLElement
    ).not.toBeVisible();
    fireEvent.click(button);
    // eslint-disable-next-line testing-library/no-node-access
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      document.getElementById("extended-nav") as HTMLElement
    ).toBeVisible();
  });


  test("Test logo when the viewport decreases.", () => {
    render(<Header />);
    // Change the viewport to 500px.
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    // eslint-disable-next-line testing-library/no-node-access
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("logoIcon");
  });


  test("bookdetail organism rendering", () => {
    const history = createMemoryHistory();
    const route = '/bookdetail/1';
    history.push(route);

    render(

      <MemoryRouter initialEntries={['/bookdetail/1']} >
        <Routes>
          <Route path="/bookdetail/:bookid" element={<BookDetail />} />
        </Routes>
      </MemoryRouter>
    );
  });

  test("bookdetail page rendering", () => {
    const history = createMemoryHistory();
    const route = '/bookdetail/1';
    history.push(route);

    render(

      <MemoryRouter initialEntries={['/bookdetail/1']} >
        <Routes>
          <Route path="/bookdetail/:bookid" element={<BookDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
  });


  it("my library heading", () => {
    render(<BrowserRouter><MyLibrary /></BrowserRouter>);
    const linkElement = screen.getByText("My Library");
    expect(linkElement).toBeInTheDocument();
  });

  it("template for main page testing", () => {
    render(<BrowserRouter><Template page={"main"} /></BrowserRouter>)
  });


  it("templte for entrepreneurship page testing", () => {
    render(<BrowserRouter><Template page={"entrepreneurship"} /></BrowserRouter>);
  });
  
  it("templte for book detail page testing", () => {
    <MemoryRouter initialEntries={['/bookdetail/1']} >
      <Routes>
        <Route path="/bookdetail/:bookid" element={<Template page={"bookdetail"} />} />
      </Routes>
    </MemoryRouter>
  });

  it("search bar event", () => {
    const setSearch = jest.fn((value) => { })

    const { queryByPlaceholderText } = render(<SearchBar />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const searchInput = screen.getByPlaceholderText("Search by title or author")

    fireEvent.change(searchInput, { target: { value: 'test' } })
  });

});
