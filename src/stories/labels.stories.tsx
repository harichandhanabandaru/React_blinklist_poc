import Hamburger from "../components/atoms/reading/cardAtoms/Hamburger";
import Time from "../components/atoms/reading/cardAtoms/Time";
import NavIcons from "../components/atoms/reading/extendedNavAtoms/NavIcons";
import HorizontalLine from "../components/atoms/reading/extendedNavAtoms/HorizontalLine";

import MyLibrary from "../components/atoms/reading/navAtoms/MyLibrary";

export default {
  title: "atoms/card",
};

const authorName = {
  fontStyle: "normal",
  fontWeight: " normal",
  fontSize: "16px",
  lineHeight: "20px",
  color: "#6D787E",
  marginTop: "0px",
  marginLeft: "5px",
};
const bookTitle = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "23px",
  paddingTop: "0px",
  paddingBottom: "0px",
  marginLeft: "2px",
  color: "#03314B",
};

export const author = () => (
  <div style={authorName}>
    <span>Alvin Louski</span>
  </div>
);

export const title = () => (
  <div>
    <span style={bookTitle}>Bring to the Library</span>
  </div>
);
 export const hamburger = () => <Hamburger />;
 export const time = () => <Time timeToRead={"12 min read"} />;
 export const horizontalLine = () =><HorizontalLine />;



 export const myLibary = () =><MyLibrary/>;

