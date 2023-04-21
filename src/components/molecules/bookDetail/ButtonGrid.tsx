import { Button, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useStyle from "../../../styles";

function ButtonGrid() {
  const classes = useStyle();
  return (
    <>
      <Grid container columnSpacing={6} rowSpacing={2}>
        <Grid item>
          {" "}
          <Button variant="outlined">
            <Typography variant="body1">
              <span style={{ color: "#22C870", textTransform: "none" }}>
                Read now
              </span>
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <a href="#" className={classes.finishReadingButton}>
              Finish Reading
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<ArrowRightAltIcon />}>
            <Typography variant="body1" color="#6D787E" textTransform="none">
              Send to Kindle
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ButtonGrid;
