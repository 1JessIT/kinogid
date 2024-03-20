import React from "react";
import { CountryAndGenre } from "../styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const FilmDescription = ({ details, actors }) => {
  const first20Actors = actors ? actors.slice(0, 20) : [];
  console.log(details.filmLength);
  return (
    <CountryAndGenre>
      <Typography>Страна</Typography>
      <Box>
        {details && details.countries
          ? details.countries.map((item) => (
              <Typography
                key={item.country}
                color="black"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontStyle: "italic",
                }}
              >
                {item.country}{" "}
              </Typography>
            ))
          : null}
      </Box>

      <Typography>Жанр</Typography>
      <Box>
        {details && details.genres
          ? details.genres.map((item) => (
              <Typography
                key={item.genre}
                color="black"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontStyle: "italic",
                }}
              >
                {item.genre}
                {", "}
              </Typography>
            ))
          : null}
      </Box>
      <Typography>Время</Typography>
      <Typography
        color="black"
        variant="p"
        sx={{
          fontSize: "15px",
          fontStyle: "italic",
        }}
      >
        {details.filmLength} минут
      </Typography>
      <Typography>Слоган</Typography>
      <Typography
        color="black"
        variant="p"
        sx={{
          fontSize: "14px",
          fontStyle: "italic",
        }}
      >
        {details.slogan}
      </Typography>

      <Typography>В ролях</Typography>
      <Box sx={{ marginTop: "15px" }}>
        {first20Actors && first20Actors
          ? first20Actors.map((item) => (
              <Typography
                key={item.nameRu}
                color="black"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontStyle: "italic",
                }}
              >
                {item.nameRu}
                {", "}
              </Typography>
            ))
          : null}
      </Box>
    </CountryAndGenre>
  );
};

export default FilmDescription;
