import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import BannerData from "../../molecules/enterpreneurship/BannerData";
import banner from "../../../images/banner.png";
function Banner() {
  return (
    <Grid container columnSpacing={6}>
      <Grid item sm={8}>
        <BannerData />
      </Grid>

      <Grid item sm={3} justifyContent="flex-start">
        <CardMedia
          component="img"
          alt="card"
          height="230px"
          width="249px"
          border-radius="8 8 0 0"
          image={banner}
        />
      </Grid>
    </Grid>
  );
}

export default Banner;
