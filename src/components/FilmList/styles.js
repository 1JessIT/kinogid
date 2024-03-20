import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Rating = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  color: "white",
  zIndex: 2,
  maxWidth: "30px",
  maxHeight: "25px",
  marginLeft: "3px",
  background: "linear-gradient(to top, #138D75, #52BE80, #7DCEA0)",
  borderRadius: "3px",
  fontWeight: "bolder",
  marginTop: "3px",
}));
