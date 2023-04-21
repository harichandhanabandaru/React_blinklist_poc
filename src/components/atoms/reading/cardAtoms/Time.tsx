import React from "react";
import useStyle from "../../../../cardStyle";

interface propsType {
  timeToRead:string;
}
function Time(props:propsType) {
  const classes = useStyle();
  return <p className={classes.timeStyle}>{props.timeToRead}</p>;
}

export default Time;
