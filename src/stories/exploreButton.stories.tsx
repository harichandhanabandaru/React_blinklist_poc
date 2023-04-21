
// import { Typography } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import useStyle from "../styles";
// import ExploreButton from "../components/atoms/reading/navAtoms/ExploreButton";
 import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"; import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import useStyle from "../styles";
import health from "../images/health.png";
import education from "../images/education.png";
import history from "../images/history.png";
import NavIcons from "../components/atoms/reading/extendedNavAtoms/NavIcons";
import { MemoryRouter } from "react-router-dom";

export default
{ 
    title:"molecule/explore",
 
};
   // decorators : [() => (><NavIcons /></MemoryRouter>)]
// const explore={
//     marginTop:"17px",   
// };
const  exploreText= {
    display: "inline-block",
  marginLeft: "41.69px",
  marginTop: "-30px",
  paddingTop:"-20px",
  top:"0",
  lineHeight:"30px",
  color: "#03314B",

  '&:hover':{
    
     textDecoration: "underline 3px solid #2CE080",
     textUnderlineOffset:"2px",
   
 
 },

};
const exploreArrow= {
    fontWeight: "700",
    color: "#03314B",
display:"inline-block",
height:"25px",
paddingBottom:"0px",
marginBottom:"-8px",
width:"35px"
  };

export const exploreUP = ()=>  <a href="#"> <div  style={{ float: "left",height:"0px" }}><span style={exploreText} >       
   <Typography variant="body1">Explore</Typography> </span>
      <Box style={exploreArrow} ><KeyboardArrowUpOutlinedIcon style={exploreArrow} />
              </Box>
</div>
</a>;

export const exploreDown = ()=>  <a href="#"> <div  style={{ float: "left",height:"0px" }}><span style={exploreText} >       
   <Typography variant="body1">Explore</Typography> </span>
      <Box style={exploreArrow} ><KeyboardArrowDownOutlinedIcon style={exploreArrow} />
              </Box>
</div>
</a>;

export const navIcons = () => (
<> <MemoryRouter>
 <NavIcons to={"/#"} image={health} alt={"img"} text={"Health"} />
  <NavIcons  to={"/#"} image={education} alt={"img"} text={"Education"} />
  <NavIcons to={"/#"} image={history} alt={"img"} text={"History"} />
  </MemoryRouter>
  </>

);


// export const exploreDown =()=>
//  <a href="#"> <div  style={{ float: "left",height:"0px" }}><span  style={exploreText} >       
//  <Typography variant="body1">Explore</Typography> </span>
//     <Box style={exploreArrow} ><KeyboardArrowUpOutlinedIcon style={exploreArrow} />
//             </Box>
// </div>
// </a>

// export const explore = ()=>
// {
  
//     return <>
//         <span id="explore" className={classes.exploreText}>
//             <Typography variant="body1">Explore</Typography>
//         </span>
//         <div style={{ display: "inline-block" }} className={classes.exploreArrow}>
//             <KeyboardArrowUpOutlinedIcon className={classes.exploreArrow} />
//         </div>
//         <span id="explore" className={classes.exploreText}>
//             <Typography variant="body1">Explore</Typography>
//         </span>
//         <div style={{ display: "inline-block" }} className={classes.exploreArrow}>
//             <KeyboardArrowDownOutlinedIcon className={classes.exploreArrow} />
//         </div>


//     </>;
// }




// export default {
//     label:'MUIButton/FabIcon',
//     component:Fab
// }as ComponentMeta< typeof Fab>

// const fabStyle = {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//   };
//   const fab =  {
//       color: 'primary' as 'primary',
//       sx: fabStyle as SxProps,
//       icon: <AddIcon />,
//       label: 'Add',
//     }
// export const fabIcon: ComponentStory<typeof Fab> = () =>

// <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
// {fab.icon}
// </Fab>