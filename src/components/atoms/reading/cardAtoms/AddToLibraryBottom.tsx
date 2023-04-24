import AddIcon from "@mui/icons-material/Add";
import useStyle from "../../../../cardStyle";
import styled from "styled-components";
import { Box } from "@mui/material";

interface propsType {
  cardId: string;
}
const StyledDiv = styled(Box)`
  transition: color .2s,
border:2px solid grey,
height:40px,,
paddingBottom:"20px"
   &:hover {
        backgroundcolor: #0365F2,
        color:white;
    }
`;
function AddToLibraryBottom(props: propsType) {
  const classes = useStyle();
  function handleChange() {
    let currentReading: number[] = [];

    currentReading = JSON.parse(
      sessionStorage.getItem("currentReading") || "[]"
    );

    let displayBooks: number[] = [];

    displayBooks = JSON.parse(sessionStorage.getItem("displayBooks") || "[]");

    let index = displayBooks.indexOf(parseInt(props.cardId));
    displayBooks.splice(index, 1);
    currentReading.push(parseInt(props.cardId));
    sessionStorage.setItem("displayBooks", JSON.stringify(displayBooks));
    sessionStorage.setItem("currentReading", JSON.stringify(currentReading));

    const card = document.getElementById(props.cardId) as HTMLElement;
    card.style.display = "none";
  }

  return (
    <StyledDiv id="addButton">
      <a href="#" onClick={handleChange} className={classes.addToLibraryIcon}>
        <AddIcon sx={{ marginBottom: "-5px", padding: "0", height: "20px" }} />
        <span> Add to library</span>
      </a>
    </StyledDiv>
  );
}

export default AddToLibraryBottom;
