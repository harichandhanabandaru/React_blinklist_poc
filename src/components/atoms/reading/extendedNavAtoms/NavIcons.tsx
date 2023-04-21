import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useStyle from "../../../../navStyle";

interface propsType {
  image: string;
  alt: string;
  text: string;
  to: string;
}
function NavIcons(props: propsType) {
  const classes = useStyle();
  const anchorStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    textDecoration: "none",
    display: "flex",
    justifyContent: "left",
    margin: "25px",
  };

  return (
    <li style={listStyle}>
      <Link to={props.to} style={anchorStyle}>
        <img
          src={props.image}
          alt={props.alt}
          style={{ marginRight: "10px" }}
        ></img>
        <Typography noWrap variant="body2" className={classes.textStyle}>
          {" "}
          {props.text}
        </Typography>
      </Link>
    </li>
  );
}

export default NavIcons;
