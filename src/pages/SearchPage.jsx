import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchSearch from "../utils/search";
import { MovieCarousel } from "../commons/MovieCarousel";

export const SearchPage = () => {
  const { search } = useParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    FetchSearch.getMovies(search).then((res) => setMovies(res.results));
    FetchSearch.getTvShows(search).then((res) => setSeries(res.results));
  }, [search]);

  console.log("SOY TC SHOW", series);

  return (
    <Box>
      <Box>
        <Heading>MOVIES:</Heading>
        <MovieCarousel data={movies} />
      </Box>
      <Box>
        <Heading>TV SHOWS:</Heading>
        <MovieCarousel data={series} />
      </Box>
    </Box>
  );
};
