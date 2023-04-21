import { createTheme } from "@mui/material";


declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subtitle3: true;
    body3: true;
    caption1: true;
    caption2: true;
  }
}
const theme = createTheme({
  typography: {
    fontFamily: "Cera Pro",
    heading: { fontSize: "36px", lineHeight: "45px", fontWeight: "700"},
    subtitle1: { fontSize: "24px", lineHeight: "32px", fontWeight: "500", color:"#0365F2"},
    subtitle2: { fontSize: "18px", lineHeight: "24px", fontWeight: "700" },
    subtitle3: { fontSize: "18px", lineHeight: "24px", fontWeight: "400",color: "#6D787E" },
    body1: { fontSize: "16px", lineHeight: "24px", fontWeight: "700" ,color:"#353430",fontFamily: "Cera Pro" },
    body2: { fontSize: "16px", lineHeight: "24px", fontWeight: "400", },
    body3: { fontSize: "22px", lineHeight: "20px", fontWeight: "400" },
    caption1: { fontSize: "14px", lineHeight: "22px", fontWeight: "400" },
    caption2: { fontSize: "14px", lineHeight: "22px", fontWeight: "700" },
  },
});

export default theme;

