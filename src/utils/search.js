import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

class FetchSearch {
  static getMovies = async function (search) {
    try {
      const { data } = await axios.get(
        `${baseURL}/search/getMovies?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTvShows = async function (search) {
    try {
      const { data } = await axios.get(
        `${baseURL}/search/getTvShows?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getActors = async function (search) {
    try {
      const { data } = await axios.get(
        `${baseURL}/search/getActors?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchSearch;
