import { Button } from "@mui/material";
import React from "react";
import useStyle from "../../../../cardStyle";
import AddToLibraryBottom from "./AddToLibraryBottom";

interface propsType {
  cardId: string;
}

interface bookProps {
  title: string;
  author: string;
  timeToRead: string;
  coverImage: string;
  finishedReading: boolean;
}

function Bottom(props: propsType) {
  const classes = useStyle();

  function handlechange() {
    let currentReading: number[] = [],
      finishedReading: number[] = [];
    currentReading = JSON.parse(
      sessionStorage.getItem("currentReading") || "{}"
    );
    if (sessionStorage.getItem("finishedReading") !== null)
      finishedReading = JSON.parse(
        sessionStorage.getItem("finishedReading") || "{}"
      );
    let index = currentReading.indexOf(parseInt(props.cardId));

    currentReading.splice(index, 1);
    finishedReading.push(parseInt(props.cardId));
    sessionStorage.setItem("currentReading", JSON.stringify(currentReading));
    sessionStorage.setItem("finishedReading", JSON.stringify(finishedReading));

    const card = document.getElementById(props.cardId) as HTMLElement;
    
    card.style.display = "none";
  }
  function handleread() {
    let currentReading: number[] = [],
      finishedReading: number[] = [];
    currentReading = JSON.parse(
      sessionStorage.getItem("currentReading") || "{}"
    );

    if (sessionStorage.getItem("finishedReading") !== null)
      finishedReading = JSON.parse(
        sessionStorage.getItem("finishedReading") || "{}"
      );
    let index = finishedReading.indexOf(parseInt(props.cardId));

    finishedReading.splice(index, 1);
    currentReading.push(parseInt(props.cardId));
    sessionStorage.setItem("currentReading", JSON.stringify(currentReading));
    sessionStorage.setItem("finishedReading", JSON.stringify(finishedReading));

    const card = document.getElementById(props.cardId) as HTMLElement;
    card.style.display = "none";
    const json = require("../../../../data.json");
    json["books"]
      .filter((book: bookProps) => book.coverImage === props.cardId)
      .map((book: bookProps) => {
        book.finishedReading = false;
      });
  }

  return (
    <div>
      {sessionStorage.getItem("libraryTab") === "current" ? (
        <>
          {" "}
          <Button variant="text" onClick={handlechange}>
            finished
          </Button>{" "}
          <div className={classes.bottom}></div>
        </>
      ) : sessionStorage.getItem("libraryTab") === "enterpreneurship" ? (
        <AddToLibraryBottom cardId={props.cardId} />
      ) : (
        <>
          <Button variant="text" onClick={handleread}>
            read again
          </Button>
          <div className={classes.bottom}></div>
        </>
      )}
    </div>
  );
}

export default Bottom;
