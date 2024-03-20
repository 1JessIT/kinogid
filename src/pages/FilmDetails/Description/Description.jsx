import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Description = ({ details }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: "20px",
          fontWeight: "bolder",
          fontFamily: "Oswald, sans-serif",
          backgroundImage:
            "linear-gradient(to right, silver, black, black, silver)",
          WebkitBackgroundClip: "text", // Для Safari
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Описание
      </Typography>

      <Typography
        variant="body3"
        color="text.secondary"
        sx={{
          marginTop: "1px",
          fontFamily: "Josefin Sans, sans-serif",
          fontSize: "15px",
          fontWeight: "bolder",
        }}
      >
        {details.description}
      </Typography>
    </Box>
  );
};

export default Description;
