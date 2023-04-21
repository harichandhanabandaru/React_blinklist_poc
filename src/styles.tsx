import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  toolbar: {
    display: "inline-block",
    // marginLeft: "20vw",
    marginRight: "0px",
    marginLeft:"2%"

   


  },
  searchIcon: {
    marginLeft: "42.91px",
    // marginRight:"1%"
  },
  explore:{
    marginTop:"17px",
  

 

  },

  exploreText: {
      display: "inline-block",
    marginLeft: "41.69px",
    marginBottom: "20px",
  
   "&:hover": {
      
       textDecoration: "underline 3px solid #2CE080",
       textUnderlineOffset:"2px",
     
   
   },

  },
  exploreArrow: {
    fontWeight: "700",
    color: "#353430",
marginBottom: "-8px",

  },
  avator:{
 
     position:"relative",
     display: "inline-block",
     marginLeft:"60vw",
     paddingTop:"8px",

    
        '@media (max-width :440px)': {
            marginLeft:"30vw",
            paddingTop:"8px",},
           
         },
         '@media (width <439px)': {
            marginLeft:"45vw",
            paddingTop:"8px",},
            
    
  avatorArrow:{
    fontWeight: "700",
    color: "#353430",
marginBottom: "12px",

  },
  textOnAvator:{
      position:"absolute",
      top:"1rem",
      left:"1rem",
      color:"black",
      display:"inline-block",

  },
  myLibraryIcon: {
    textDecoration:"none",
display:"inline-block",
paddingLeft:"16px",
color:"#03314B",

"&:hover": {
      
    textDecoration: "underline 3px solid #2CE080 ",
    textUnderlineOffset:"2px"
},
  },
  nav:{
    width:"0%",
  },

tabStyle:{
  // width:"100vw",
  textTransform:"none",
fontStyle: "normal",
fontWeight:" bold",
fontSize: "18px",
lineHeight: "23px",
/* identical to box heig,ht */
color:"#22C870",

paddingRight:"10px",

'@media (max-width :440px)': {
  fontSize: "10px",
},
}
,
currentReading:{
height:"90vh",

},
finishReadingButton:{
textDecoration:"none",
backgroundColor:"#22C870",
color:"black",
padding:"5px 40px 15px 40px", 
fontWeight: "500",
fontSize: "16px",
lineHeight: "20px",
textAlign:"end",
alignSelf:"bottom",

},
sendToKindle:{
  paddingTop:"13px",

},

});
export default useStyle;
