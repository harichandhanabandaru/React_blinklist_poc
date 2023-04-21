/* eslint-disable testing-library/no-container */
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { screen, configure } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CardGrid from './components/molecules/CardGrid';
import Tabs from './components/organisms/header/Tabs';

afterEach(cleanup);
 it("molecule/card grid rendering for current tab session",()=>{
     sessionStorage.setItem("libraryTab","current");
     render(<CardGrid />);
 })
 it("molecule/card grid rendering  for finished tab session",()=>{
    sessionStorage.setItem("libraryTab","finished");
    render(<CardGrid />);
})
it("molecule/card grid rendering",()=>{
    window.sessionStorage.clear();
    render(<CardGrid />);
})

it("current tab rendering",()=>{
render(<Tabs/>);
const current = screen.getByText("Currently Reading");
fireEvent.change(current);

})
it(" finish tab rendering",()=>{
    render(<Tabs/>);
    const finished = screen.getByText("Finished");
    fireEvent.change(finished);
    })