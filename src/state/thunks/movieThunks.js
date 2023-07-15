import axios from "axios";
import {
  setMovie,
  setDiscoverMovies,
  setMovieCredits,
  setVerGratis,
  setEstrenos,
  setIsLoading,
  setError,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} from "../slices/movieSlice";

axios.defaults.withCredentials = true;

export const fetchDiscoverMovies = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/movies/all-movies`
    );
    dispatch(setDiscoverMovies(response.data.results));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error("Fetch movies error: ", err);
    dispatch(setError(err));
    dispatch(setIsLoading(false));
  }
};

export const fetchSingleMovie = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/tmdb/single-movie?id=${id}`
    );
    dispatch(setMovie(response.data));
    dispatch(setIsLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setIsLoading(false));
  }
};

export const fetchMovieCredits = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/tmdb/movie-credits?id=${id}`
    );
    dispatch(setMovieCredits(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setIsLoading(false));
  }
};

export const fetchTvCredits = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/tv-show/tv-show-credits?id=${id}`
    );
    dispatch(setMovieCredits(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setIsLoading(false));
  }
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/tmdb/top-rated-movies`
    );
    dispatch(setTopRatedMovies(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpComingMovies = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `http://localhost:8080/api/favorites/favorite-movies?email=${data}`,
      data,
      { withCredentials: true, credential: "include" }
    );
    dispatch(setUpcomingMovies(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error(err);
  }
};
