import { CardActionArea, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getActors,
  getAwards,
  getBudget,
  getDetails,
  getFacts,
  getReviews,
} from "./filmDetailsSlice";
import { FilmTitleAndRatings } from "./FilmTitleRatings/FilmTitleRatings";
import Description from "./Description/Description";
import {
  ContainerDetails,
  Content,
  CoverDetails,
  DetailsBox,
  DetailsCard,
} from "./styles";
import FilmDescription from "./FilmDescription/FilmDescription";
import { RatingAndAwards } from "./RatingAndAwards/RatingAndAwards";
import { FilmReviews } from "./FilmReviews/FilmReviews";
import { Box } from "@mui/system";

const FilmDetails = ({ items }) => {
  const params = useParams();

  const dispatch = useDispatch();
  const awards = useSelector((state) => state.filmDetails.awards);
  // console.log(awards);
  const details = useSelector((state) => state.filmDetails.details);
  // console.log(details);
  const actors = useSelector((state) => state.filmDetails.actors);
  // console.log(actors);
  const reviews = useSelector((state) => state.filmDetails.reviews);
  console.log("reviews:", reviews);
  const budgets = useSelector((state) => state.filmDetails.budgets);
  console.log("budgets:", budgets);

  const facts = useSelector((state) => state.filmDetails.facts);
  console.log("facts:", facts);

  useEffect(() => {
    dispatch(getDetails(params.id));
    dispatch(getAwards(params.id));
    dispatch(getActors(params.id));
    dispatch(getReviews(params.id));
    dispatch(getBudget(params.id));
    dispatch(getFacts(params.id));
  }, [dispatch, params.id]);

  return (
    <Box>
      <ContainerDetails>
        <DetailsCard>
          <DetailsBox>
            <CoverDetails
              component="img"
              height="100%"
              width="100%"
              objectFit="cover"
              image={details.coverUrl}
            />
            <CardActionArea>
              <Content>
                <FilmTitleAndRatings />
                {details.ratingAgeLimits && (
                  <Typography
                    variant="p"
                    sx={{
                      color: "#637787",
                      fontSize: "20px",
                      fontFamily: "Gabarito, sans-serif",
                    }}
                  >
                    {details.nameOriginal} {details.ratingAgeLimits.slice("3")}+
                  </Typography>
                )}
                <RatingAndAwards awards={awards} details={details} />
                <FilmDescription details={details} actors={actors} />

                <Description details={details} />
              </Content>
            </CardActionArea>
          </DetailsBox>
        </DetailsCard>
      </ContainerDetails>
      <FilmReviews reviews={reviews} budgets={budgets} facts={facts} />
    </Box>
  );
};

export default FilmDetails;
