// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import useStyle from '../../../styles';
// import Card from '../../molecules/Card';
// import { Grid } from '@mui/material';
// import CardGrid from '../../molecules/CardGrid';
// import Footer from '../footer/Footer';

import { Box, Grid, styled } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
const GridStyled = styled(Grid)`
  border-bottom: 2px solid #e1ecfc;
  display: flex;
  gap: 1.3rem;
  cursor: default;
  width: 90%;

  margin-bottom: 1rem;
  & .active {
    border-bottom: 2px solid #2ce080;
    padding-bottom: 1rem;
    // border-collapse: collapse;
  }
  & .idle {
    padding-bottom: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`;
type aboutBookTabProps = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
};

function BookDetailTab({
  setActiveTab,
  activeTab,
}: aboutBookTabProps): JSX.Element {
  const toggleTab = (event: React.MouseEvent<HTMLDivElement>) => {
    setActiveTab((event.target as Element).id);
  };
  return (
    <Box sx={{ paddingBottom: "20px", width: "650px" }}>
      <GridStyled>
        <Grid
          item
          md={3}
          className={activeTab === "synopsis" ? "active" : "idle"}
          onClick={toggleTab}
          id="synopsis"
          // style={{width:"200px"
          style={{ minWidth: "200px" }}
        >
          Synopsis
        </Grid>
        <Grid
          item
          md={4}
          className={activeTab === "whom" ? "active" : "idle"}
          id="whom"
          onClick={toggleTab}
          style={{ minWidth: "200px" }}
        >
          Who is it for?
        </Grid>
        <Grid
          item
          md={4}
          className={activeTab === "aboutAuthor" ? "active" : "idle"}
          id="aboutAuthor"
          onClick={toggleTab}
          style={{ minWidth: "200px" }}
        >
          About the author
        </Grid>
      </GridStyled>
    </Box>
  );
}

export default BookDetailTab;
