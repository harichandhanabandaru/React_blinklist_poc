import { Box } from "@mui/material";
import React from "react";
import CardGrid from "../../molecules/enterpreneurship/CardGrid";
import SearchBar from "../../molecules/enterpreneurship/SearchBar";
import Banner from "./Banner";

function Enterpreneurship() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  if (sessionStorage.getItem("displayBooks") === null) {
    sessionStorage.setItem("displayBooks", JSON.stringify(array));
  }
  return (
    <>
      {" "}
      <Box
        sx={{
          width: "912px",
          height: "250px",
          background: "#F1F6F4",
          marginTop: "40px",
          marginLeft: "20%",
          justifyContent: "center",
        }}
      >
        <Banner />
      </Box>
      <SearchBar />
      <CardGrid />
    </>
  );
}

export default Enterpreneurship;
