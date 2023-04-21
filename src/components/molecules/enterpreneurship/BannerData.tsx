import { Grid, Typography } from "@mui/material";
import React from "react";

function BannerData() {
  return (
    <Grid
      container
      direction="column"
      sm={10}
      justifyContent="left"
      display="flex-start"
    >
      <Grid
        item
        style={{ display: "block", textAlign: "left", paddingLeft: "45px" }}
      >
        <br />
        <Typography variant="heading">
          <span style={{ color: "#03314B" }}>
            Explore Books on
            <br />
            Enterpreneurship
          </span>
        </Typography>
        <br />
        <br />
        <Typography variant="subtitle2">
          <span
            style={{
              color: "#6D787E",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "23px",
            }}
          >
            {" "}
            Everything you need to know about thriving on a <br />
            shoestring budget, making your first million, and hiring
            <br /> right from the start.{" "}
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BannerData;
