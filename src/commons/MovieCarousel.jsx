import { Box } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import Carousel from "react-multi-carousel";

export const MovieCarousel = ({ data, list }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 1920 },
      items: 5,
    },
    medial: {
      breakpoint: { max: 1920, min: 990 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 990, min: 600 },
      items: 3,
    },
    smartphone: {
      breakpoint: { max: 600, min: 425 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  return (
    <Box mx="auto">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite="true"
      >
        {data.map((item, i) => (
          <MovieCard item={item} key={i} list={list} />
        ))}
      </Carousel>
    </Box>
  );
};
