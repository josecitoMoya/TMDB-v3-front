import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

class FetchMovies {
  static getMovie = async function (movieId) {
    try {
      const { data } = await axios.get(
        `${baseURL}/movies/single-movie?id=${movieId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getMovieCredits = async function (movieId) {
    try {
      const { data } = await axios.get(
        `${baseURL}/movies/movie-credits?id=${movieId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getPopularMovies = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/movies/popular-movies`);
      console.log("SOY DATA EN POP", data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getPopularMovies = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/movies/popular-movies`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTopRatedMovies = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/movies/top-rated-movies`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getUpComingMovies = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/movies/up-coming-movies`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getSearched = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/movies/up-coming-movies`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchMovies;
