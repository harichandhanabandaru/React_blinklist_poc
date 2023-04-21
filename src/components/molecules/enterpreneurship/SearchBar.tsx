import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { searchCard } from "./searchCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "white",
      marginBottom: "0px",
    },
  },
}));
function SearchBar() {
  const [textinput, setInput] = useState("");
  const classes = useStyles();

  useEffect(() => searchCard(textinput));

  return (
    <div style={{ display: "flex", marginLeft: "19%" }}>
      <TextField
        id="searchbar"
        placeholder="Search by title or author"
        value={textinput}
        className={classes.root}
        fullWidth={true}
        sx={{ m: 1, width: "30vw", color: "white" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ paddingBottom: "13px" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
