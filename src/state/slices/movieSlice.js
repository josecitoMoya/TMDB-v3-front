import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discoverMovies: [],
  movieCredits: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setDiscoverMovies: (state, action) => {
      state.discoverMovies = action.payload;
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMovie,
  setDiscoverMovies,
  setMovieCredits,
  setVerGratis,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setIsLoading,
  setError,
} = moviesSlice.actions;

export default moviesSlice.reducer;
