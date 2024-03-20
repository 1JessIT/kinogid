import styled from "@emotion/styled";
import { Input } from "@mui/material";

export const SearchBar = styled(Input)(() => ({
  maxHeight: "48px",
  border: "none",
  padding: "5px 8px",
  borderRadius: "62px",
  background: "#f0f0f0",
  flexGrow: 1,
  minWidth: "700px",
}));
