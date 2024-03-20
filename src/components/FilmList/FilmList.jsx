import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./filmsListSlice";
import FilmCard from "../FilmCard/FilmCard";
import { Rating } from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FilmList = () => {
  const list = useSelector((state) => state.filmsList.list);
  const isLoading = useSelector((state) => state.filmsList.isLoading);
  const pagesCount = useSelector((state) => state.filmsList.pagesCount);
  // console.log(pagesCount);

  // console.log(list);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getFilms(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div>
      <Grid container spacing={10}>
        {list &&
          list.map((item) => (
            <Grid key={item.filmId} item xs={6} sm={4} md={3} lg={2}>
              <Box sx={{ position: "relative", zIndex: 0 }}>
                <Rating>
                  <p>{item.rating}</p>
                </Rating>
                <FilmCard
                  film={item}
                  sx={{ position: "relative", zIndex: 1 }}
                />
                <Box sx={{ display: "grid", gridTemplateColumns: "150px 1fr" }}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: "#708090",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      lineHeight: "20px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "500px",
                    }}
                  >
                    {item.nameRu}
                  </Typography>
                  <FavoriteBorderIcon
                    sx={{
                      color: "red",
                      marginLeft: "20px",
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "bolder",
                    }}
                  >
                    {item.year}
                  </Typography>
                </Box>
                <Box>
                  {item.genres.map((item) => (
                    <Typography
                      key={item.genre}
                      color="black"
                      variant="overline"
                      sx={{
                        fontWeight: "cursive",
                        fontSize: "8px",
                        fontStyle: "italic",
                        lineHeight: "0.1px",
                      }}
                    >
                      {item.genre}{" "}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4px",
        }}
      >
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={(event, newPage) => handlePageChange(newPage)}
        />
      </Box>
    </div>
  );
};

export default FilmList;
