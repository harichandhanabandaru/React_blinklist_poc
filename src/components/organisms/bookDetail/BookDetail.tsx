import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import AboutBook from "../../molecules/bookDetail/AboutBook";
import BookDetailTab from "./BookDetailTab";
import Footer from "../footer/Footer";

function BookDetail() {
  const { bookid } = useParams();

  return (
    <>
      <Box style={{ margin: "90px 5px 20px 5px" }}>
        <Typography variant="body2" align="left">
          <span
            style={{
              paddingLeft: "7%",
              paddingBottom: "40px",
              paddingTop: "10%",
            }}
          >
            {" "}
            Get the key ideas from
          </span>
        </Typography>
        <Container>
          <Grid container direction="row">
            <Grid item>
              <AboutBook id={bookid} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default BookDetail;
