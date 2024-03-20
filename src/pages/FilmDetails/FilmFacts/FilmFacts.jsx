import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const removeHTMLCodesAndTags = (text) => {
  const withoutHTMLCodes = text.replace(/&#[^;]+;/g, "");

  const withoutHTMLTags = withoutHTMLCodes.replace(/<[^>]+>/g, "");

  return withoutHTMLTags;
};

export const FilmFacts = ({ facts }) => {
  const [showFacts, setShowFacts] = useState(5);

  const factsToDisplay =
    facts && facts.items ? facts.items.slice(0, showFacts) : [];

  const showMore = () => {
    if (factsToDisplay.length < facts.items.length) {
      setShowFacts(showFacts + 5);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ marginTop: "30px" }}>
        Интересные факты о фильме...
      </Typography>
      <Grid container>
        {facts &&
          facts.items &&
          factsToDisplay.map((item, index) => (
            <Grid item key={index} xs={6} md={8} lg={12}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <li>{removeHTMLCodesAndTags(item.text)}</li>
              </ul>
            </Grid>
          ))}
      </Grid>
      {facts && facts.items && factsToDisplay.length < facts.items.length && (
        <Button
          onClick={showMore}
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: "10px",
            borderBlockStyle: "hidden",
            borderBlockColor: "greenYellow",
            padding: "2px 4px",
            fontSize: "px",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          Показать еще
        </Button>
      )}
    </Box>
  );
};
