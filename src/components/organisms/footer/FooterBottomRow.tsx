import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import useStyle from "../../../navStyle";

interface propsType {
  text: string;
}
function FooterBottomRow(props: propsType) {
  const classes = useStyle();
  const anchorStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    textDecoration: "none",
    display: "flex",
    justifyContent: "left",
    margin: "8px",
  };

  return (
    <li style={listStyle}>
      <a href="#" style={anchorStyle}>
        <Typography noWrap variant="body2" className={classes.textStyle}>
          {" "}
          {props.text}
        </Typography>
      </a>
    </li>
  );
}

export default FooterBottomRow;
