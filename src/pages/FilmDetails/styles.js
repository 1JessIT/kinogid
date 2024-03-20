import styled from "@emotion/styled";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

export const ContainerDetails = styled(Box)(() => ({
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  margin: "0 auto",
  marginTop: "110px",
  width: "100%",
  minHeight: "100vh",
  // height: "100vh",
}));

export const DetailsBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "400px 1fr",
  width: "100%",
  height: "100%",
}));

export const CoverDetails = styled(CardMedia)(() => ({
  objectFit: "cover",
  width: "400px",
  height: "530px",
  // padding: "20px
}));

export const Content = styled(CardContent)(() => ({
  marginBottom: "300px",
  display: "grid",
  alignItems: "center",
  marginLeft: "20px",
}));

export const CountryAndGenre = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "150px 1fr ",
  marginTop: "15px",
  alignItems: "center",
}));

export const DetailsCard = styled(Card)(() => ({
  maxWidth: "1440px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  background: "rgb(246, 244, 243)",
}));
