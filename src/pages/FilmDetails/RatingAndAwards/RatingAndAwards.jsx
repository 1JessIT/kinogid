import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const RatingAndAwards = ({ awards, details }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: " 600px 1fr",
      }}
    >
      <Rating
        name="read-only"
        value={details.ratingFilmCritics / 2}
        readOnly
        style={{ color: "black" }}
        sx={{
          marginTop: "10px",
        }}
      />
      <Typography variant="body2" color="textSecondary">
        {awards && awards.items
          ? awards.items
              .filter((item, index, self) => {
                return (
                  item.imageUrl &&
                  self.findIndex((i) => i.imageUrl === item.imageUrl) === index
                );
              })
              .map((item) => (
                <img
                  key={item.imageUrl}
                  src={item.imageUrl}
                  alt={"Награды"}
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "10px",
                  }}
                />
              ))
          : null}
      </Typography>
    </Box>
  );
};
