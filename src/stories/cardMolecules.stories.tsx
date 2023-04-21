import { MemoryRouter } from "react-router-dom";
import Avator from "../components/molecules/Avator";
import Card from "../components/molecules/Card";
import TimeMolecule from "../components/molecules/TimeMolecule";
import temp from "../images/temp.svg";

export default {
  title: "molecule/card",
};

export const avator = () => <Avator />;
export const timeMolecule = () => <TimeMolecule timeToRead={"13 min read"} />;
export const card = () => (
    <MemoryRouter>
  <Card
    image={temp}
    title={"Bring Your Human To  Work"}
    author={"Erica Keswin"}
    timeToRead={"13 min read"}
    id={"1"}
  />
  </MemoryRouter>
);
