//import { createTheme } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  cardStyle: {
    width: "284px",
    height: "466px",
    border: "8px",
    display: "inline-block",
    textAlign: "left"
  },
  authorName: {
    fontStyle: "normal",
    fontWeight: " normal",
    fontSize: "16px",
    lineHeight: "20px",

    /* Text/low_emphasis */

    color: "#6D787E",
    marginTop: "0px",
    marginLeft: "5px",
    textAlign:"left",

  },
  bookTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginLeft: "2px",
    textAlign:"left",
    /* identical to box height */


    /* Text/high_emphasis */

    color: "#03314B"
  },
  timeStyle: {
    marginTop: "0px",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    /* identical to box height */


    /* Text/low_emphasis */

    color: "#6D787E"



  },
  grid1: {
    paddingTop: "0px",
    paddingLeft: "16px",

  },
  grid2: {
    alignSelf: 'flex-end'
  },
  bottom: {
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    borderRadius: "0px 0px 8px 8px",
    height: "14px"
  },

  hamburger: {
    marginBottom: "22px",
    paddingBottom: "14px",
    marginRight: "28px"

  },
  addToLibraryIcon: {
    textDecoration:"none",
    color:"#0365F2",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "35px",
  },
  bookCardData:{
    '&:hover':
    {
      backgroundColor:"#F1F6F4",
    }
  }


});
export default useStyle;
