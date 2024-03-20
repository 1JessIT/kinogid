import React from "react";
import { BootomFooter, FooterContainer } from "./styles";
import { Box } from "@mui/system";
import { Logo } from "../../globalStyles";
import { Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <FooterContainer
      position="fixed"
      sx={{
        padding: 0,
      }}
    >
      <BootomFooter />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo>KINOGID</Logo>
          <Typography
            variant="body1"
            component="p"
            sx={{
              marginLeft: "240px",
            }}
          >
            KINOGID - это удобный онлайн-сервис для поиска информации о фильмах.
            С помощью KINOGID,пользователи могут найти информацию о фильмах,
            такую как название, жанр, режиссер, актеры, рейтинг, и многое
            другое. KINOGID облегчает поиск интересующих фильмов и предоставляет
            всю необходимую информацию в одном месте.
          </Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
