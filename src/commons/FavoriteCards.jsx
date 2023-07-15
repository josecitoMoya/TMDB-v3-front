import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import FetchMovies from "../utils/movies";
import FetchTvShows from "../utils/tvShow";
import { useEffect, useState } from "react";
import FetchFavorites from "../utils/favorites";
import { useSelector } from "react-redux";

export const FavoriteCard = ({ item }) => {
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState([]);
  const imageUrl = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;

  const handleDelete = () => {
    const data = {
      email: user.email,
      tmdb_id: item.tmdb_id,
      tmdb_name: item.tmdb_name,
    };
    FetchFavorites.deleteFavorite(data);
  };

  useEffect(() => {
    FetchMovies.getMovie(item.tmdb_id).then((res) => setData(res));
  }, [item]);

  console.log("SOY data", data);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageUrl}
        alt={data.original_title ? data.original_title : data.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            {data.original_title ? data.original_title : data.name}
          </Heading>

          <Text py="2">{data.overview}</Text>
        </CardBody>

        <CardFooter>
          <Center w={"100%"}>
            <Button variant="solid" colorScheme="facebook" w={"35%"} m={2}>
              Details
            </Button>
            <Button
              variant="solid"
              colorScheme="facebook"
              w={"35%"}
              m={2}
              onClick={handleDelete}
            >
              Delete from favorites
            </Button>
          </Center>
        </CardFooter>
      </Stack>
    </Card>
  );
};
