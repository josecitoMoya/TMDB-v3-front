import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { BannerCarousel } from "../commons/BannerCarousel";
import { MovieCarousel } from "../commons/MovieCarousel";
import FetchMovies from "../utils/movies";
import FetchTvShow from "../utils/tvShow";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [upComingTvShows, setUpComingTvShows] = useState([]);
  const [selected, setSelected] = useState("movies");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelected = (e) => {
    setSelected(e.target.value);
    setIsLoading(true);
  };

  useEffect(() => {
    FetchMovies.getPopularMovies().then((res) => setPopularMovie(res.results));
    FetchMovies.getTopRatedMovies().then((res) =>
      setTopRatedMovie(res.results)
    );
    FetchMovies.getUpComingMovies().then((res) =>
      setUpComingMovie(res.results)
    );
    FetchTvShow.getPopularTvShows().then((res) =>
      setPopularTvShows(res.results)
    );
    FetchTvShow.getTopRatedTvShows().then((res) =>
      setTopRatedTvShows(res.results)
    );
    FetchTvShow.getUpComingTvShows().then((res) =>
      setUpComingTvShows(res.results)
    );

    setIsLoading(false);
  }, [selected]);

  return (
    <Box>
      <Heading>Discover movies:</Heading>
      <BannerCarousel />
      <Tabs variant="soft-rounded" colorScheme="facebook">
        <TabList justifyContent={"center"} mt={5}>
          <Tab w={"35%"} value={"movies"} onClick={handleSelected}>
            Movies
          </Tab>
          <Tab w={"35%"} value={"tv shows"} onClick={handleSelected}>
            TV Shows
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box mt={5}>
              <Heading>Popular movies:</Heading>
              <MovieCarousel data={popularMovie} />

              <Heading>Top rated movies:</Heading>
              <MovieCarousel data={topRatedMovie} />

              <Heading>Up coming movies:</Heading>
              <MovieCarousel data={upComingMovie} list={selected} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box mt={5}>
              <Heading>Popular tv shows:</Heading>
              <MovieCarousel data={popularTvShows} />

              <Heading>Top rated tv shows:</Heading>
              <MovieCarousel data={topRatedTvShows} />

              <Heading>Up coming tv shows:</Heading>
              <MovieCarousel data={upComingTvShows} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
