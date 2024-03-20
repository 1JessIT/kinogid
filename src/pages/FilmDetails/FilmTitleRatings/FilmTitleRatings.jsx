import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import RatingIcon from "../../../assets/images/Rating.svg";
import RatingLeftIcon from "../../../assets/images/RatingLeft.svg";
import { Box } from "@mui/system";

export const FilmTitleAndRatings = () => {
  const details = useSelector((state) => state.filmDetails.details);

  const calculateFontSize = () => {
    const containerWidth = 23;
    const text = `${details.nameRu} (${details.year})`;
    const fontSize = 35;

    const textWidth = text.length * fontSize;
    if (textWidth > containerWidth) {
      const newFontSize = (containerWidth / text.length) * fontSize;
      return newFontSize;
    }
    return fontSize;
  };

  return (
    <Typography
      variant="h1"
      color="text.primary"
      sx={{
        fontWeight: "bold",
        fontSize: calculateFontSize() + "px",
        display: "grid",
        gridTemplateColumns: "600px 1fr",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {details.nameRu} ({details.year})
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(165deg, #ffd25e 16.44%, #b59646 63.42%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          width: "40px",
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            fontWeight: "bolder",
          }}
        >
          {details.ratingKinopoisk}
        </Typography>
        <img
          src={RatingIcon}
          alt="Rating"
          sx={{
            width: "18px",
            height: "18px",
          }}
        />
        <Box>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "bolder",
              lineHeight: 0.7,
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            кино
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "bolder",
              lineHeight: 0.7,
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            поиск
          </Typography>
        </Box>
        <img
          src={RatingLeftIcon}
          alt="Rating"
          sx={{
            width: "18px",
            height: "18px",
          }}
        />
        <Box
          sx={{
            background: "linear-gradient(165deg, #ffd25e 0%, #b59646 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontWeight: "bolder",
              ml: "40px",
            }}
          >
            {details.ratingImdb}
          </Typography>
        </Box>
        <img
          src={RatingIcon}
          alt="Rating"
          sx={{
            width: "18px",
            height: "18px",
          }}
        />
        <Typography
          sx={{
            color: "text.secondary",
            fontWeight: "bolder",
            lineHeight: 0.7,
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          IMBD
        </Typography>
        <img
          src={RatingLeftIcon}
          alt="Rating"
          sx={{
            width: "18px",
            height: "18px",
          }}
        />
      </Box>
    </Typography>
  );
};
