import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import styled from "@emotion/styled";

import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Container = styled(Box)(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));

const MainLayout = (props) => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
