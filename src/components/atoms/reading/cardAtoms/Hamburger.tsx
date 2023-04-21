import useStyle from "../../../../cardStyle";
import React from "react";
import hamburgerImg from "../../../../images/hamburger.png";

function Hamburger() {
  const classes = useStyle();
  return (
    <img src={hamburgerImg} alt="hamburger" className={classes.hamburger} />
  );
}

export default Hamburger;
