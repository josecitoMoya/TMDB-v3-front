import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Fetch from "../utils/movies";
import { ActorCarousel } from "../commons/ActorCarousel";
import FetchFavorites from "../utils/favorites";

export const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setIsLoading(true);
    Fetch.getMovie(id)
      .then((res) => setMovie(res))
      .then(setIsLoading(false));
  }, [id]);

  const handleFavorites = () => {
    const data = {
      tmdb_id: movie.id,
      tmdb_name: movie.original_title,
      email: user.email,
    };
    FetchFavorites.addFavorite(data).then((res) =>
      console.log("SOY LA RTA DE FAVORITES", res)
    );
  };

  return isLoading ? (
    <Center m="25%">
      <Spinner
        justifyContent={"center"}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        maxH={"max-content"}
        gap={4}
        mt={"5%"}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Image src={imageUrl} borderRadius={55} />
        </GridItem>

        <GridItem colSpan={2}>
          <Box>
            <Link to={movie.homepage}>
              <Heading mt={20} fontSize={"6xl"} textAlign={"center"}>
                {movie.original_title}
              </Heading>
            </Link>
            <Text
              p={2}
              textDecor={"underline"}
              fontSize={"2xl"}
              textAlign={"center"}
            >
              {movie.tagline}
            </Text>
            <></>
          </Box>
        </GridItem>

        <GridItem colSpan={2} mt={-150}>
          <Text fontSize={"4xl"}>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Overview
            </span>
            : {movie.overview}
          </Text>
          <Divider m={30} />
          {user.user && (
            <Button
              mt={25}
              w={"100%"}
              h={50}
              colorScheme={"facebook"}
              borderRadius={45}
              onClick={handleFavorites}
            >
              Add to Favorites
            </Button>
          )}
        </GridItem>
        <GridItem colSpan={4}>
          <Heading>Cast</Heading>
          <ActorCarousel id={id} />
        </GridItem>
      </Grid>
    </Box>
  );
};
