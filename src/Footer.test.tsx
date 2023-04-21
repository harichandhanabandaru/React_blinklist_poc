import React from 'react';
import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import Footer from './components/organisms/footer/Footer';
import FooterIcon from './components/organisms/footer/FooterIcon';

describe('Footer', () => {


    it("footer rendering", () => {

        render(<Footer />);
    })


    it("footer icons rendering", () => {
        render(<><FooterIcon text={"Pricing"} />
            <FooterIcon text={"Book Lists"} />
            <FooterIcon text={"What to read Next. ?"} />
            <FooterIcon text={"Gift Cards"} />
            <FooterIcon text={"Partner"} />
        </>);
        screen.getByText("Pricing");
        screen.getByText("Book Lists");
        screen.getByText("What to read Next. ?");
        screen.getByText("Gift Cards");
        screen.getByText("Partner");

    });



});