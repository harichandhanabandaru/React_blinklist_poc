import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyle from "../../../navStyle";
import HorizontalLine from "../../atoms/reading/extendedNavAtoms/HorizontalLine";
import NavIcons from "../../atoms/reading/extendedNavAtoms/NavIcons";
import enterpreneurship from "../../../images/enterpreneurship.svg";
import science from "../../../images/science.png";
import economics from "../../../images/economics.png";
import corporate from "../../../images/corporate.png";
import psychology from "../../../images/psychology.png";
import nature from "../../../images/nature.png";

import politics from "../../../images/politics.png";
import health from "../../../images/health.png";
import history from "../../../images/history.png";
import motivation from "../../../images/motivation.png";
import productivity from "../../../images/productivity.png";
import carrer from "../../../images/carrer.png";

import marketing from "../../../images/marketing.png";
import personal from "../../../images/personal.png";
import communication from "../../../images/communication.png";
import money from "../../../images/money.png";
import relationship from "../../../images/relationship.png";
import education from "../../../images/education.png";

function ExtendedNavItems() {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        // flexWrap="nowrap"
      >
        <Grid item>
          <Typography variant="subtitle3">
            <a href="#" className={classes.navContainerGrid1}>
              Explore by category
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle3">
            <a href="#" className={classes.navContainerGrid1}>
              See recently added items
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle3">
            <a href="#" className={classes.navContainerGrid1}>
              See popular titles
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Grid item style={{ flex: 1 }}>
          <HorizontalLine />
        </Grid>
      </Grid>

      {/* //2nd part of nav      */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={7} lg={4}>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <NavIcons
              to={"/enterpreneurship"}
              image={enterpreneurship}
              alt={"Enterpreneurship"}
              text={"Enterpreneurship"}
            />
            <NavIcons
              to={"#"}
              image={science}
              alt={"economics"}
              text={"Science"}
            />
            <NavIcons
              to={"#"}
              image={economics}
              alt={"economy"}
              text={"Economics"}
            />
            <NavIcons
              to={"#"}
              image={corporate}
              alt={"corporate"}
              text={"Corporate culture"}
            />
            <NavIcons
              to={"#"}
              image={psychology}
              alt={"psychology"}
              text={"Psychology"}
            />
            <NavIcons
              to={"#"}
              image={nature}
              alt={"nature"}
              text={"Nature & Environment"}
            />
          </ul>
        </Grid>
        <Grid item xs={12} md={7} lg={4}>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <NavIcons
              to={"#"}
              image={politics}
              alt={"politics"}
              text={"Politics"}
            />
            <NavIcons to={"#"} image={health} alt={"health"} text={"Health"} />
            <NavIcons
              to={"#"}
              image={history}
              alt={"history"}
              text={"History"}
            />
            <NavIcons
              to={"#"}
              image={motivation}
              alt={"motivation"}
              text={"Motivation & Inspiration "}
            />
            <NavIcons
              to={"#"}
              image={productivity}
              alt={"productivity"}
              text={"Productivity"}
            />
            <NavIcons
              to={"#"}
              image={carrer}
              alt={"carrer"}
              text={"Carrer & Success"}
            />
          </ul>
        </Grid>
        <Grid item xs={12} md={7} lg={4}>
          <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
            <NavIcons
              to={"#"}
              image={marketing}
              alt={"marketing"}
              text={"Marketing & Sales"}
            />
            <NavIcons
              to={"#"}
              image={personal}
              alt={"personal"}
              text={"Personal Development"}
            />
            <NavIcons
              to={"#"}
              image={communication}
              alt={"communication"}
              text={"Communication skills"}
            />
            <NavIcons
              to={"#"}
              image={money}
              alt={"money"}
              text={"Money & Investment"}
            />
            <NavIcons
              to={"#"}
              image={relationship}
              alt={"relation"}
              text={"Sex & Relation"}
            />
            <NavIcons
              to={"#"}
              image={education}
              alt={"education"}
              text={"Education"}
            />
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExtendedNavItems;
