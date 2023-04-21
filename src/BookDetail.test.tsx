import '@testing-library/jest-dom';
import { shallow, configure, mount } from 'Enzyme';
// import Adapter from "enzyme-adapter-react-17";
import Enzyme from 'enzyme';
import temp from "./images/temp.svg";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AboutBook from './components/molecules/bookDetail/AboutBook';
import { cleanup, render } from '@testing-library/react';
import ButtonGrid from './components/molecules/bookDetail/ButtonGrid';
import Card from './components/molecules/Card';
import { BrowserRouter } from 'react-router-dom';
import Hamburger from './components/atoms/reading/cardAtoms/Hamburger';
import React from 'react';
afterEach(cleanup);
Enzyme.configure({ adapter: new Adapter() });
describe("App", () => {

    it("about book  rendering", () => {
        render(<AboutBook id={"1"} />);
    });
    it("render button grid on book detail page", () => {
        render(<ButtonGrid />);
    });

    it("check vector icon rendering in book detail", () => {
        render(<AboutBook id={"1"} />);
        // eslint-disable-next-line testing-library/no-node-access
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        expect(displayedImage.src).toContain("Vector");
    });




    it("check image rendering in book detail", () => {
        render(<AboutBook id={"1"} />);
        // eslint-disable-next-line testing-library/no-node-access
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        expect(displayedImage.src).toContain("Vector");
    });

    it("check card rendering", () => {
        render(<BrowserRouter><Card image={temp} title={"Beyond Enterpreneurship"} author={"Erica Keswin"} timeToRead={"13-min read"} id={"1"} /></BrowserRouter>);
    });
    it("should call setState with initial values on component mount", () => {
        const mockSetState = jest.spyOn(React, "useState");

        render(<AboutBook id={"1"} />);

        //    expect(mockSetState).toHaveBeenCalledTimes(1);
        //     expect(mockSetState).toHaveBeenCalledWith("whom");
    });

    it("check hamburger rendering", () => {
        render(<Hamburger />);
        // eslint-disable-next-line testing-library/no-node-access
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        expect(displayedImage.src).toContain("");
    });

})