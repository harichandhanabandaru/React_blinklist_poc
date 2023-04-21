import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Box, Typography } from "@mui/material";

export default {
  title: "atoms/explore",
};

const exploreArrowStyle = {
  fontWeight: "700",
  color: "#03314B",
  display: "inline-block",
  height: "25px",
  paddingBottom: "0px",
  marginBottom: "-8px",
  width: "35px",
};
export const arrowUp = () => (
  <div>

    <KeyboardArrowUpOutlinedIcon style={exploreArrowStyle} />
  </div>
);

export const arrowDown = () => (
    <div>
  
      <KeyboardArrowDownOutlinedIcon style={exploreArrowStyle} />
    </div>
  );
//   export const explore1=() => (
// <a href="#"> <div  style={{ float: "left",height:"0px" }}><span style={exploreText} >       
//    <Typography variant="body1">Explore</Typography> </span>
// </div>
// </a>
//   );
  
