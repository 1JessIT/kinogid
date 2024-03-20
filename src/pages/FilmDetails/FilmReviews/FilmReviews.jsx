import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FilmBudget from "../FilmBudget/FilmBudget";

export const FilmReviews = ({ reviews, budgets, facts }) => {
  const reviewsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = reviews ? Math.ceil(reviews.length / reviewsPerPage) : 0;

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews ? reviews.slice(startIndex, endIndex) : [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box
      sx={{
        marginTop: "15px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "800px 1fr",
      }}
    >
      <Grid sx={{ marginTop: 5 }}>
        <Typography>Рецензии к фильму</Typography>
        {currentReviews.map((item) => (
          <Grid
            key={item.filmId}
            item
            xs={4}
            sm={6}
            md={8}
            sx={{ margin: "15px" }}
          >
            <Card
              sx={{
                backgroundColor:
                  item.type === "POSITIVE"
                    ? "#AAF7CB"
                    : item.type === "NEGATIVE"
                    ? "#F9979C"
                    : "#F9F7AB",
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 3 }}
                    alt={item.author}
                    src={item.authorPhoto}
                  />
                  <div>
                    <Typography
                      sx={{ fontSize: 14, marginRight: "20px" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.author}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, marginRight: "20px" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.date}
                    </Typography>
                  </div>
                </div>

                <Divider />
                <Typography variant="body2" sx={{ marginTop: "8px" }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ margin: 5 }}>
        <FilmBudget budgets={budgets} facts={facts} />
      </Box>
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            sx={{ color: "black", fontSize: "13px", marginTop: "5px" }}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
    </Box>
  );
};
