import styled from "@emotion/styled";
import { Input, Toolbar } from "@mui/material";
import header from "../../assets/images/header.svg";

export const MyHeader = styled(Toolbar)(() => ({
  backgroundColor: "#ffffff",
  boxShadow: "rgba(54, 52, 51, 0.26)",
  width: "100%",
  position: "absolute",
  margin: "0",
  marginTop: "4px",
}));

export const TopHeader = styled(Toolbar)(() => ({
  height: "4px",
  width: "100%",
  backgroundImage: `url(${header})`,
  backgroundRepeat: "repeat",
  maxHeight: "4px",
  position: "relative",
}));
