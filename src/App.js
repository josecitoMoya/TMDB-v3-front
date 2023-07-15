import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingUp } from "./components/SingUp";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersistence } from "./state/thunks/userThunks";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { SingleMoviePage } from "./pages/SingleMoviePage";
import { fetchDiscoverMovies } from "./state/thunks/movieThunks";
import { Favorites } from "./pages/Favorites";
import { SearchPage } from "./pages/SearchPage";
import { SingleTvPage } from "./pages/SingleTvPage";

const App = () => {
  const isLoading = useSelector((state) => state.movie.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersistence());
    dispatch(fetchDiscoverMovies());
  }, [dispatch]);

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
    <Box ml={"10%"} mr={"10%"}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page/:search" element={<SearchPage />} />
          <Route path="/single-page-movie/:id" element={<SingleMoviePage />} />
          <Route path="/single-page-tv/:id" element={<SingleTvPage />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/favorites/:email" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
