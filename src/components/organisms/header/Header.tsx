import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import searchIcon from "../../../images/searchIcon.png";
import AppBar from "@mui/material/AppBar";
import logo from "../../../images/logo.png";
import logoIcon from "../../../images/logoIcon.png";
import useStyle from "../../../styles";
import ExploreButton from "../../atoms/reading/navAtoms/ExploreButton";
import Avator from "../../molecules/Avator";
import MyLibrary from "../../atoms/reading/navAtoms/MyLibrary";

function Header() {
  const classes = useStyle();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1230);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1230);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    console.log("inside header useeffect");
  }, []);

  return (
    <AppBar
      style={{ background: " #FFFFFF", position: "relative" }}
      elevation={0}
    >
      <Toolbar className={classes.toolbar} disableGutters>
        {isDesktop ? (
          <>
            <img src={logo} alt="logo" />
            <img src={searchIcon} alt="search" className={classes.searchIcon} />
            <ExploreButton />
            <MyLibrary />
            <Avator />
          </>
        ) : (
          <>
            <img src={logoIcon} alt="logoIcon" />
            <img src={searchIcon} alt="search" className={classes.searchIcon} />
            <Avator />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
