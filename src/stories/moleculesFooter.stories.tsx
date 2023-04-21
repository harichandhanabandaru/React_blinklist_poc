import FooterBottomRow from "../components/organisms/footer/FooterBottomRow";
import FooterIcon from "../components/organisms/footer/FooterIcon";

export default {
  title: "molecule/footer",
};
export const footerIcon = () => <FooterIcon text={"terms and services |"} />;
export const footerBottom = () => <FooterBottomRow text={"sitemap"} />;
