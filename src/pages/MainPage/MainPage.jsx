import styled from "@emotion/styled";
import { Box } from "@mui/material";

import React from "react";
import FilmList from "../../components/FilmList/FilmList";

const Boxes = styled(Box)(() => ({
  margin: "0 auto",
  marginTop: "30px",
  padding: "10% 100px 0px 100px",
  overflowWrap: "break-word",
  height: "100%",
  backgroundColor: "rgb(246 244 243)",
}));

export const MainPage = () => {
  return (
    <Boxes>
      <FilmList />
    </Boxes>
  );
};
