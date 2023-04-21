import React, { useEffect, useState } from "react";
//import Header from '@mui/material/Header';
import Box from "@mui/material/Box";
import useStyle from "../../../navStyle";
import { Container } from "@mui/material";
import ExtendedNavItems from "./ExtendedNavItems";

function ExtendedNav() {
  const classes = useStyle();
  return (
    <Box id="extended-nav" className={classes.navBox}>
      <Container className={classes.navContainer}>
        <ExtendedNavItems />
      </Container>
    </Box>
  );
}

export default ExtendedNav;
