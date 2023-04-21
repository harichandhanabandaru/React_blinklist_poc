import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyle from "../../../styles";
import Card from "../../molecules/Card";
import { Grid } from "@mui/material";
import CardGrid from "../../molecules/CardGrid";
import Footer from "../footer/Footer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex" }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyle();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    newValue === 0
      ? sessionStorage.setItem("libraryTab", "current")
      : sessionStorage.setItem("libraryTab", "finished");
    setValue(newValue);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "10%",
          marginTop: "59px",
          marginBottom: "60px",
        }}
      >
        {" "}
        My Library
      </h1>
      <Box sx={{ width: "100vw", zIndex: 0 }}>
        <Box sx={{ paddingLeft: "6%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { backgroundColor: "#22C870" } }}
          >
            <Tab
              label={
                <span className={classes.tabStyle}>Currently Reading</span>
              }
              {...a11yProps(0)}
              style={{ minWidth: "20%" }}
            />
            <Tab
              label={<span className={classes.tabStyle}>Finished</span>}
              {...a11yProps(1)}
              style={{ minWidth: "20%" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box style={{ position: "absolute", width: "100%", marginLeft: 0 }}>
            <CardGrid />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            style={{
              position: "absolute",
              width: "100%",
              minHeight: "100px",
              marginLeft: 0,
            }}
          >
            <CardGrid />
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}
