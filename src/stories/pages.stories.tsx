import { MemoryRouter } from "react-router-dom";
import AboutBook from "../components/molecules/bookDetail/AboutBook";
import BookDetail from "../components/organisms/bookDetail/BookDetail";
import Header from "../components/organisms/header/Header";
import BookDetailPage from "../components/pages/BookDetailPage";
import EntrepreneurshipPage from "../components/pages/EntrepreneurshipPage";
import LandingPage from "../components/pages/LandingPage";

export default {
  title: "page/pages",
};
export const main = () => (
  <MemoryRouter>
    <LandingPage />
  </MemoryRouter>
);
export const enterpreneurship = () => (
  <MemoryRouter>
    <EntrepreneurshipPage />
  </MemoryRouter>
);
export const bookdetail = () => (
  <MemoryRouter>
      <Header/>
      <AboutBook id={"1"}/>;
  </MemoryRouter>
);
