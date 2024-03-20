import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { FilmFacts } from "../FilmFacts/FilmFacts";

const FilmBudget = ({ budgets, facts }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Бюджеты фильма
      </Typography>
      <Grid container spacing={2}>
        {budgets &&
          budgets.items &&
          budgets.items.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Box border={1} borderColor="primary.main" borderRadius={4} p={2}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {item.type}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {item.symbol}
                  {item.amount} {item.currencyCode}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
      <FilmFacts facts={facts} />
    </Box>
  );
};

export default FilmBudget;
