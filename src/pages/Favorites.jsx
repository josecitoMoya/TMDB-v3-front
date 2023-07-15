import { useEffect, useState } from "react";
import FetchFavorites from "../utils/favorites";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Center, Wrap } from "@chakra-ui/react";
import { FavoriteCard } from "../commons/FavoriteCards";
import { fetchUpComingMovies } from "../state/thunks/movieThunks";

export const Favorites = () => {
  const user = useSelector((state) => state.user.user);
  const [favorites, setFavorites] = useState([]);
  const upComing = useSelector((state) => state.movie.upcomingMovies);
  const dispatch = useDispatch();
  const { email } = useParams();

  useEffect(() => {
    // dispatch(fetchUpComingMovies(email));
    FetchFavorites.getFavorites(email).then((res) => setFavorites(res));
  }, [upComing]);

  return (
    <Center w={"100%"} m={5}>
      <Wrap>
        {favorites.map((item) => (
          <FavoriteCard item={item} />
        ))}
      </Wrap>
    </Center>
  );
};
