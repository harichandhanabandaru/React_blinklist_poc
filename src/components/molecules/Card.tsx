import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@mui/material";
import BookTitle from "../atoms/reading/cardAtoms/BookTitle";
import AuthorName from "../atoms/reading/cardAtoms/AuthorName";
import TimeMolecule from "./TimeMolecule";
import useStyle from "../../cardStyle";
import Hamburger from "../atoms/reading/cardAtoms/Hamburger";
import Bottom from "../atoms/reading/cardAtoms/Bottom";
import { StyledGrid } from "./enterpreneurship/StyledGrid";
import { Link } from "react-router-dom";

interface bookProps {
  image: string;
  title: string;
  author: string;
  timeToRead: string;
  id: string;
}
function BookCard(cardProps: bookProps): JSX.Element {
  const classes = useStyle();
  console.log("inside book card");
  console.log(sessionStorage.getItem("libraryTab"));
  return (
    <StyledGrid container direction="column">
      <Link
        to={"/bookdetail/" + cardProps.id}
        style={{ textDecoration: "none" }}
      >
        {" "}
        <Grid>
          <CardMedia
            component="img"
            alt="card"
            height="282"
            width="284"
            border-radius="8 8 0 0"
            image={cardProps.image}
          />
        </Grid>
        <Grid item>
          <BookTitle title={cardProps.title} />
        </Grid>
        <Grid item>
          <AuthorName author={cardProps.author} />
        </Grid>
        <Grid item className={classes.grid1}>
          <TimeMolecule timeToRead={cardProps.timeToRead} />
        </Grid>
      </Link>

      <Grid item>
        <Bottom cardId={cardProps.id} />
      </Grid>
    </StyledGrid>
  );
}

export default BookCard;
