import { Box, Grid } from "@mui/material";
import GridOne from "./GridOne";
import GridTwo from "./GridTwo";
import GridThree from "./GridThree";
import Footer from "../../organisms/footer/Footer";

function CardGrid() {
  sessionStorage.setItem("libraryTab", "enterpreneurship");
  return (
    <>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            {" "}
            <h2
              style={{
                paddingLeft: "10%",
                marginTop: "10%",
                textAlign: "left",
              }}
            >
              Trending Blinks
            </h2>
          </Grid>

          <GridOne />

          <Grid item xs={12}>
            {" "}
            <h2 style={{ paddingLeft: "10%", textAlign: "left" }}>
              Just Added
            </h2>
          </Grid>

          <GridTwo />

          <Grid item xs={12}>
            {" "}
            <h2 style={{ paddingLeft: "10%", textAlign: "left" }}>Featured</h2>
          </Grid>

          <GridThree />
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default CardGrid;
