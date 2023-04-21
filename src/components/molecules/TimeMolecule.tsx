import React from "react";
import { Grid } from "@mui/material";
import Vectorclock from "../../images/Vectorclock.png";
import Time from "../atoms/reading/cardAtoms/Time";

interface propsType {
  timeToRead: string;
}
function TimeMolecule(props: propsType) {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <img src={Vectorclock} alt="clock"></img>
      </Grid>

      <Grid item>
        <Time timeToRead={props.timeToRead} />
      </Grid>
    </Grid>
  );
}
export default TimeMolecule;
