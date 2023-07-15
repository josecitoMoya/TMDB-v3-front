import axios from "axios";

class FetchSearch {
  static getMovies = async function (search) {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/search/getMovies?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTvShows = async function (search) {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/search/getTvShows?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getActors = async function (search) {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/search/getActors?search=${search}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchSearch;
