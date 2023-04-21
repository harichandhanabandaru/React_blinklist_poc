import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card";

interface bookProps {
  title: string;
  author: string;
  timeToRead: string;
  coverImage: string;
  finishedReading: boolean;
}

function GridOne() {
  const array= require("../../../data.json");
  let displayBooks:number[] = JSON.parse(JSON.stringify(sessionStorage.getItem("displayBooks")));
  console.log(displayBooks);
  const cards = array["books"]
    .filter(
      (book: bookProps) =>
        displayBooks.includes(parseInt(book.coverImage)) &&
        array["trendingBlinks"].indexOf(book.title) > -1
    )
    .map((book: bookProps) => {
      const Image = require("../../../images/" + book.coverImage + ".svg");
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
      <Grid container>{cards}</Grid>
    </>
  );
}

export default GridOne;
