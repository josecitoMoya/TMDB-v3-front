import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { Box, Stack, Text, Wrap } from "@chakra-ui/react";
import { ActorCard } from "./ActorCard";
import FetchMovie from "../utils/movies";
import { useLocation } from "react-router-dom";
import FetchTvShow from "../utils/tvShow";

export const ActorCarousel = ({ id }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  // const [tvShowCredits, setTvShowCredits] = useState([]);
  const location = useLocation();

  const tvShowCredits = useSelector((state) => state.movie.movieCredits.cast);

  useEffect(() => {
    FetchMovie.getMovieCredits(id).then((res) => setMovieCredits(res.cast));
  }, [id]);

  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 1920 },
      items: 10,
    },
    medial: {
      breakpoint: { max: 1920, min: 990 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 990, min: 600 },
      items: 5,
    },
    smartphone: {
      breakpoint: { max: 600, min: 425 },
      items: 3,
    },

    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  return (
    <Box mx="auto" p="4">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite="true"
      >
        {location === "/single-page-movie/*"
          ? tvShowCredits.map((cast, i) => <ActorCard cast={cast} key={i} />)
          : movieCredits.map((cast, i) => <ActorCard cast={cast} key={i} />)}
      </Carousel>
    </Box>
  );
};
