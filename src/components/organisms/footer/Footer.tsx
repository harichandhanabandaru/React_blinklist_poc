import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import useStyle from "../../../footerStyle";
import logo from "../../../images/logo.png";
import { Typography } from "@material-ui/core";
import FooterIcon from "./FooterIcon";
import FooterBottomRow from "./FooterBottomRow";
function Footer() {
  const classes = useStyle();
  return (
    <Box className={classes.box}>
      <Grid container>
        <Grid
          container
          columns={30}
          columnSpacing={12}
          justifyContent="flex-start"
        >
          <Grid item>
            <img style={{ paddingBottom: "50px" }} src={logo} alt="logo"></img>
            <br />
            <Typography variant="subtitle1">
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "32px",
                  /* or 133% */
                  top: "150px",
                  color: "#0365F2",
                }}
              >
                {" "}
                Big idea in small packages
                <br />
                Start learning now
              </span>
            </Typography>
          </Grid>

          <Grid item style={{ display: "inline" }}>
            <span style={{ paddingRight: "30%" }}>Editorial</span>
            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
              <FooterIcon text={"Book Lists"} />
              <FooterIcon text={"What is Nonfiction"} />
              <FooterIcon text={"What to read next.?"} />
              <FooterIcon text={"Benefits of reading"} />
            </ul>
          </Grid>

          <Grid item style={{ display: "inline" }}>
            <span style={{ paddingRight: "30%" }}>UseFul Links</span>

            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
              <FooterIcon text={"Pricing"} />
              <FooterIcon text={"Blinklist Business"} />
              <FooterIcon text={"Gift Cards"} />
              <FooterIcon text={"Blinklist magzine"} />
              <FooterIcon text={"Contact & Help"} />
            </ul>
          </Grid>

          <Grid item style={{ display: "inline" }}>
            <span style={{ paddingRight: "30%" }}>Company</span>

            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
              <FooterIcon text={"About"} />
              <FooterIcon text={"Carrer"} />
              <FooterIcon text={"Partner"} />
              <FooterIcon text={"Code of conduct"} />
            </ul>
          </Grid>
        </Grid>
        <Grid container>
          <FooterBottomRow text={"BlinkList 2021 sitemap "} />
          <FooterBottomRow text={"|  Imprint"} />
          <FooterBottomRow text={"|  Terms of service      "} />
          <FooterBottomRow text={"|  Privacy Policy      "} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
