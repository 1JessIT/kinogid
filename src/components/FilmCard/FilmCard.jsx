import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Popover,
  Rating,
  Typography,
} from "@mui/material";
import { Content } from "./styles";
import InfoIcon from "@mui/icons-material/Info";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/films/${film.filmId}`);
  };

  const [infoPopover, setInfoPopover] = useState(null);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);

  const cardRef = useRef(null);
  const handleInfoIconClick = (event) => {
    setInfoPopover(event.currentTarget);
  };

  const handleInfoPopoverClose = () => {
    setInfoPopover(null);
  };

  setTimeout(() => {
    if (!isPopoverHovered) {
      setInfoPopover(null);
    }
  }, 1300);

  return (
    <Card
      onClick={toDetails}
      sx={{
        width: "200px",
        height: "300px",
        position: "relative",
        marginTop: -8,
        marginBottom: 1,
      }}
      ref={cardRef}
      onMouseLeave={handleInfoPopoverClose}
    >
      <CardMedia
        sx={{
          position: "absolute",
          zIndex: "1",
          maxWidth: "300",
          padding: "3px",
        }}
        component="img"
        alt="green iguana"
        height="300"
        padding="0"
        image={film.posterUrlPreview}
      />

      <Content>
        <Typography
          variant="h5"
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginLeft: "25px",
          }}
        >
          {film.nameRu}
        </Typography>
        <IconButton
          sx={{
            width: "24px",
            height: "24px",
            position: "absolute",
            marginLeft: "150px",
          }}
          onMouseEnter={handleInfoIconClick}
        >
          <InfoIcon sx={{ color: "white" }} />
        </IconButton>
      </Content>
      <Popover
        open={Boolean(infoPopover)}
        anchorEl={infoPopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onMouseEnter={() => setIsPopoverHovered(true)}
        onMouseLeave={() => setIsPopoverHovered(false)}
      >
        <div
          style={{
            padding: "10px",
            maxHeight: "400px",
            maxWidth: "500px",
          }}
          ref={cardRef}
          onMouseLeave={handleInfoPopoverClose}
        >
          <Card
            sx={{
              maxWidth: 300,
              transition: "0.9s",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "blue",
                  position: "relative",
                  zIndex: 1,
                  filter: "blur(0px)",
                }}
              >
                {film.nameRu}
              </Typography>
              <Rating
                name="read-only"
                value={film.rating / 2}
                readOnly
                style={{ color: "black" }}
                sx={{ marginTop: "10px" }}
              />
              <Typography variant="body2" color="textSecondary">
                Год: {film.year}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Страна:{" "}
                {film && film.countries
                  ? film.countries.map((item) => (
                      <Typography
                        key={item.country}
                        color="black"
                        variant="p"
                        sx={{
                          fontSize: "15px",
                          fontStyle: "italic",
                        }}
                      >
                        {item.country}
                        {",  "}
                      </Typography>
                    ))
                  : null}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Жанры:{" "}
                {film && film.genres
                  ? film.genres.map((item) => (
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
                        {",  "}
                      </Typography>
                    ))
                  : null}
              </Typography>

              <Typography variant="body2" color="textSecondary">
                Продолжительность: {film.filmLength}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Popover>
    </Card>
  );
};

export default FilmCard;
