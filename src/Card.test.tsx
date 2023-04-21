/* eslint-disable testing-library/no-container */
import React from 'react';
import '@testing-library/jest-dom';
import AuthorName from './components/atoms/reading/cardAtoms/AuthorName';
import { cleanup, fireEvent, render } from '@testing-library/react';
import BookTitle from './components/atoms/reading/cardAtoms/BookTitle';
import Time from './components/atoms/reading/cardAtoms/Time';
import Bottom from './components/atoms/reading/cardAtoms/Bottom';
import { screen, configure } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CardGrid from './components/molecules/CardGrid';
import Enterpreneurship from './components/organisms/enterpreneurship/Enterpreneurship';
import { mount } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
afterEach(cleanup);

it("author name rendering", () => {

    render(<AuthorName author={"Erica Kersin"} />);
})

it("BookTitle rendering", () => {

    render(<BookTitle title={"Beyong Enterpreneurship"} />);
})

it("Time rendering", () => {

    render(<Time timeToRead={"13-min read"} />);
})

it("bottom rendering for current tab cards", () => {
    window.sessionStorage.setItem("libraryTab", "current");
    const curr = [1, 2];
    const finish = [3];
    sessionStorage.setItem("finishedReading", JSON.stringify(curr));
    sessionStorage.setItem("currentReading", JSON.stringify(finish));
    render(<BrowserRouter><CardGrid /></BrowserRouter>);
    // eslint-disable-next-line testing-library/no-node-access
    const button = screen.getByRole("button");
    if (button)
        fireEvent.click(button);
    // eslint-disable-next-line no-restricted-globals
    window.sessionStorage.clear();

});

it("bottom  rendering for finished cards", () => {
    window.sessionStorage.setItem("libraryTab", "finished");
    const curr = [1];
    const finish = [3];
    sessionStorage.setItem("finishedReading", JSON.stringify(curr));
    sessionStorage.setItem("currentReading", JSON.stringify(finish));
    render(<BrowserRouter><CardGrid /></BrowserRouter>);
    // eslint-disable-next-line testing-library/no-node-access
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // eslint-disable-next-line no-restricted-globals
    window.sessionStorage.clear();

});

it("bottom  rendering for entrepreneurship cards", () => {
    window.sessionStorage.setItem("libraryTab", "enterpreneurship");
    const curr = [1, 2];
    const finish = [3];
    const display = [4];
    sessionStorage.setItem("displayBooks", JSON.stringify(display));
    sessionStorage.setItem("finishedReading", JSON.stringify(curr));
    sessionStorage.setItem("currentReading", JSON.stringify(finish));
    // eslint-disable-next-line testing-library/no-node-access
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const result = render(<BrowserRouter><Enterpreneurship /></BrowserRouter>);

    // eslint-disable-next-line testing-library/no-node-access
    const button = result.container.querySelector('#addButton');
    expect(button).not.toBeNull();
    if (button)
        fireEvent.click(button);
    // eslint-disable-next-line no-restricted-globals
    const ele = screen.getByText("Add to library") as HTMLElement;
    expect(ele).toBeInTheDocument();
    window.sessionStorage.clear();

});


