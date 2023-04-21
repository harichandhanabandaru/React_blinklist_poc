import BookDetail from "../components/organisms/bookDetail/BookDetail";
import Enterpreneurship from "../components/organisms/enterpreneurship/Enterpreneurship";
import ExtendedNav from "../components/organisms/header/ExtendedNav";
import Header from "../components/organisms/header/Header";
import Tabs from "../components/organisms/header/Tabs";


type LandingProps = {
  page: "entrepreneurship" | "main" | "bookdetail";
  bookid?: string;
};

function Template({ page, bookid }: LandingProps) {
  const getPage = () => {
    if (page === "main") return <Tabs />;
    else if (page === "entrepreneurship") return <Enterpreneurship />;
    else if (page === "bookdetail") return <BookDetail />;
  };

  return (
    <>
      <Header />
      <ExtendedNav />
      {getPage()}
    </>
  );
}

export default Template;
