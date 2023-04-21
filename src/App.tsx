import React from "react";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import {
  BrowserRouter, // for server rendering
  Route,
  Routes,
  Link
  // etc.
} from "react-router-dom";

import theme from "./theme";
import Header from "./components/organisms/header/Header";
import ExtendedNav from "./components/organisms/header/ExtendedNav";
import Tabs from "./components/organisms/header/Tabs";
import Footer from "./components/organisms/footer/Footer";
import LandingPage from "./components/pages/LandingPage";
import EntrepreneurshipPage from "./components/pages/EntrepreneurshipPage";
import BookDetailPage from "./components/pages/BookDetailPage";

function App() {
  sessionStorage.setItem("libraryTab","current");
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className="App">
      <Routes>
   <Route path="/"  element={<LandingPage/>}></Route>
   <Route path="/index" element={<LandingPage/>}></Route>
   <Route
                path="/enterpreneurship"
                element={<EntrepreneurshipPage />}
              >
              </Route>
              <Route path="/bookdetail/:bookid" element={<BookDetailPage  />}>
            </Route>
      </Routes>
       
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
