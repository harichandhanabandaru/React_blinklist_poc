import { MemoryRouter } from "react-router-dom";
import Banner from "../components/organisms/enterpreneurship/Banner";
import Enterpreneurship from "../components/organisms/enterpreneurship/Enterpreneurship";
import Footer from "../components/organisms/footer/Footer";
import ExtendedNav from "../components/organisms/header/ExtendedNav";
import Header from "../components/organisms/header/Header";
import Tabs from "../components/organisms/header/Tabs";

export default {
  title: "organisms/enterpreneurship",
};
export const banner = () => <Banner />;
export const enterpreneurship = () => (
  <MemoryRouter>
    {" "}
    <Enterpreneurship />
  </MemoryRouter>
);
export const footer = () => <Footer />;
export const extendedNav = () => (
  <MemoryRouter>
    {" "}
    <ExtendedNav />
  </MemoryRouter>
);
export const header = () => (
  <MemoryRouter>
    {" "}
    <Header />
  </MemoryRouter>
);
export const tabs = () => <Tabs />;
