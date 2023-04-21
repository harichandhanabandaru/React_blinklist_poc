import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({

    navBox:{
        position: 'absolute',
         width: '99vw',
        height: "2800px",
     
   
     top:"67px",
        backgroundColor:"rgba(157, 163, 166, 0.45)",
        display:"none",
        zIndex:"9999"
      

    },
    navContainer:{
        padding:"40px",
        backgroundColor:"#F1F6F4;",
      
       
    },

    navContainerGrid1:{
textDecoration:"none",
color: "#6D787E",
padding:"4px",

"&:hover":{
    color: "#116BE9",
    fontWeight: "bold"
}
},


 textStyle:{
    color:"#03314B",
    display: "inline",
    marginLeft:"10px",
    "&:hover": {
        color:"#0365F2 !important",
       
    }
   

},
svg:{
    fill:"pink !important",
}
})
export default useStyles;