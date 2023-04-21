import Typography from "@mui/material/Typography";
import useStyle from "../../../../styles";
import { Link } from "react-router-dom";

function MyLibrary() {
  const classes = useStyle();
  return (
    <Link to="/">
      <Typography variant="body1" className={classes.myLibraryIcon}>
        <span>My Library</span>
      </Typography>
    </Link>
  );
}

export default MyLibrary;
