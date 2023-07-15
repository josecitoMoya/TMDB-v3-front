import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

class FetchFavorites {
  static addFavorite = async function (data) {
    try {
      const { res } = await axios.post(
        `${baseURL}/favorites/add-favorite`,
        data,
        { withCredentials: true, credentials: "include" }
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  static deleteFavorite = async function (data) {
    try {
      const { res } = await axios.post(
        `${baseURL}/favorites/delete-favorite`,
        data,
        { withCredentials: true, credentials: "include" }
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  static getFavorites = async function (data) {
    try {
      const res = await axios.get(
        `${baseURL}/favorites/favorite-movies?email=${data}`,
        data,
        { withCredentials: true, credentials: "include" }
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchFavorites;
