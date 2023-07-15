import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { BannerCard } from "./BannerCard";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const BannerCarousel = () => {
  const movies = useSelector((state) => state.movie.discoverMovies);
  const image = `https://image.tmdb.org/t/p/original`;

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000}
        customTransition="all 20s linear"
        centerMode
        draggable
        focusOnSelect={false}
        infinite
        shouldResetAutoplay
        showDots={false}
        arrows={false}
        slidesToSlide={1}
      >
        {movies.map((item) => (
          <Box display={"block"} h={"100%"} width={"100%"} p={4}>
            <Link
              to={
                item.original_title
                  ? `/single-page-movie/${item.id}`
                  : `/single-page-tv/${item.id}`
              }
            >
              <BannerCard item={item} />
            </Link>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};
