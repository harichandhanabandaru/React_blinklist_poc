import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
  border: 1px solid #e1ecfc;

  :hover {
    background-color: #f1f6f4;
  }

  & #addButton {
    border: 1px solid #e1ecfc;
    :hover {
      background-color: #0365f2;
      a {
        color: white;
      }
    }
  }
`;
