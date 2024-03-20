import styled from "@emotion/styled";
import { CardContent } from "@mui/material";

export const Content = styled(CardContent)(() => ({
  padding: "10px",
  background: "rgba(0,0,0,0.8)",
  position: "absolute",
  height: "100%",
  width: "100%",
  transition: "0.4s",
  color: "#fff",
  zIndex: 1,
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    bacground: "rgba(0,0,0,0.5)",
    opacity: 1,
    cursor: "pointer",
  },
}));
