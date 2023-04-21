import { Grid } from "@mui/material";
import Card from "./Card";
import Footer from "../organisms/footer/Footer";

interface bookProps {
  title: string;
  author: string;
  timeToRead: string;
  coverImage: string;
  finishedReading: boolean;
}

function CardGrid() {
  const array1 = require("../../data.json");
  let currentTab =
    sessionStorage.getItem("libraryTab") === "current"
      ? false
      : "finished"
      ? true
      : null;
  let selectedCards: number[] = [];
  if (currentTab === false) {
      selectedCards = JSON.parse(
        sessionStorage.getItem("currentReading") || "[]"
      );
  } 
  else if (currentTab === true) {
      selectedCards = JSON.parse(
        sessionStorage.getItem("finishedReading") || "[]"
      );

  }
else
   { selectedCards = JSON.parse(sessionStorage.getItem("displayBooks") || "[]");}


  const cards = array1["books"]
    .filter((book: bookProps) =>
      selectedCards.includes(parseInt(book.coverImage))
    )
    .map((book: bookProps) => {
      console.log(book.coverImage);
      const Image = require("../../images/" + book.coverImage + ".svg");
      return (
        <div
          id={book.coverImage}
          style={{ display: "inline-block", padding: "5% 0% 5% 8%" }}
        >
          <Card
            image={Image}
            title={book.title}
            author={book.author}
            timeToRead={book.timeToRead}
            id={book.coverImage}
          />
        </div>
      );
    });

  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {cards}
      </Grid>

      <Footer />
    </>
  );
}

export default CardGrid;
