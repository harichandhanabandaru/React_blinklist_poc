import { CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import AuthorName from "../../atoms/reading/cardAtoms/AuthorName";
import BookTitle from "../../atoms/reading/cardAtoms/BookTitle";
import BookDetailTab from "../../organisms/bookDetail/BookDetailTab";
import TimeMolecule from "../TimeMolecule";
import ButtonGrid from "./ButtonGrid";
interface propsType {
  id?: string;
}
interface bookProps {
  title: string;
  author: string;
  timeToRead: string;
  coverImage: string;
  finishedReading: boolean;
}
function AboutBook(props: propsType) {

  const data = require("../../../data.json");
  const result = data["books"].filter(
    (book: bookProps) => book.coverImage === props.id
  );
  const Image = require("../../../images/" + props.id + ".svg");
  const [activeTab, setActiveTab] = useState("synopsis");
  const getTabInfo = () => {
    switch (activeTab) {
      case "synopsis":
        return `${result[0].title} (2020) updates ${result[0].author}'s
            essential 1992 business handbook, Beyond Entrepreneurship for the
            entrepreneurs, visionaries, and innovators of today. This new edition
            combines the timeless business advice and strategy of the original text,
            supplemented with cutting-edge insights and case studies pertinent to
            today's business world.`;
      case "whom":
        return `Any one interested to know about stuff`;
      case "aboutAuthor":
        return `${result[0].author} is a great author in this field`;
      default:
        return `<></>`;
    }
  };

  return (
    <Grid container columnSpacing={20}>
      <Grid item>
        <BookTitle title={result[0].title} />
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "25px",
            color: "#03314B",
            margin: "24px 32px 24px 2px",
          }}
        >
          Turning Your Business into an Enduring Great Company
        </div>
        <AuthorName author={result[0].author} />
        <TimeMolecule timeToRead={result[0].timeToRead} />
        <div style={{ height: "8px" }}></div>
        <ButtonGrid />
      </Grid>
      <Grid item>
        <CardMedia
          component="img"
          alt="card"
          height="304"
          width="304"
          border-radius="8 8 0 0"
          image={Image}
        />
        <div style={{ height: "35px" }}></div>
      </Grid>
      <Grid item style={{ overflow: "hidden" }}>
        <BookDetailTab setActiveTab={setActiveTab} activeTab={activeTab} />
        <Grid item md={6} style={{ overflow: "hidden" }}>
          {getTabInfo()}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutBook;
