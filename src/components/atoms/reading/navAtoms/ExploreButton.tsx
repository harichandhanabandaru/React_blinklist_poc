import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import useStyle from "../../../../styles";
import { openMenu } from "../../../organisms/header/openMenu";

function ExploreButton() {
  const classes = useStyle();
  const [up, changeToUp] = useState(true);

  useEffect(() => {
    openMenu();
  });

  return (
    <div style={{ float: "left" }} className={classes.explore}>
      <a href="#" onClick={() => changeToUp(!up)}>
        {up === true ? (
          <>
            <span id="explore" className={classes.exploreText}>
              <Typography variant="body1">Explore</Typography>
            </span>
            <div
              style={{ display: "inline-block" }}
              className={classes.exploreArrow}
            >
              <KeyboardArrowUpOutlinedIcon className={classes.exploreArrow} />
            </div>
          </>
        ) : (
          <>
            <span id="explore" className={classes.exploreText}>
              <Typography variant="body1">Explore</Typography>
            </span>
            <div
              style={{ display: "inline-block" }}
              className={classes.exploreArrow}
            >
              <KeyboardArrowDownOutlinedIcon className={classes.exploreArrow} />
            </div>
          </>
        )}
      </a>
    </div>
  );
}

export default ExploreButton;
