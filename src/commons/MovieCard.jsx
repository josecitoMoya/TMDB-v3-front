import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { fetchMovieCredits, fetchTvCredits } from "../state/thunks/movieThunks";
import FetchFavorites from "../utils/favorites";
import logo from "../assets/logo-JM.png";

export const MovieCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const user = useSelector((state) => state.user.user);

  const handleMovie = () => {
    if (item.original_title) dispatch(fetchMovieCredits(item.id));
    dispatch(fetchTvCredits(item.id));
    navigate(`single-page/${item.id}`);
  };

  const handleFavorites = () => {
    const data = {
      tmdb_id: item.id,
      tmdb_name: item.original_title ? item.original_title : item.name,
      email: user.email,
    };
    FetchFavorites.addFavorite(data);
  };

  return (
    <div>
      <Card maxW="sm" p={2} shadow={"2xl"} m={4} h={"xl"}>
        <CardBody>
          <Image
            src={item.backdrop_path ? `${imageUrl}${item.backdrop_path}` : logo}
            alt={`${item.original_title ? item.original_title : item.name}`}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading
              mt={4}
              size="md"
              overflow={"hidden"}
              h={"100px"}
              textAlign={"center"}
            >
              {`${item.original_title ? item.original_title : item.name}`}
            </Heading>
            <Text maxH={"50px"} overflow="hidden">
              {`${item.overview}`}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justify={"space-between"}>
          {user.user ? (
            <ButtonGroup spacing="5" w={"100%"}>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={handleMovie}
                w={"50%"}
                as={Link}
                to={
                  item.original_title
                    ? `/single-page-movie/${item.id}`
                    : `/single-page-tv/${item.id}`
                }
              >
                Details
              </Button>
              <Button
                variant="solid"
                colorScheme="blue"
                w={"50%"}
                onClick={handleFavorites}
              >
                Add to favorites
              </Button>
            </ButtonGroup>
          ) : (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleMovie}
              w={"100%"}
              as={Link}
              to={
                item.original_title
                  ? `/single-page-movie/${item.id}`
                  : `/single-page-tv/${item.id}`
              }
            >
              Details
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
