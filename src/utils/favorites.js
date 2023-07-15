import axios from "axios";

class FetchFavorites {
  static addFavorite = async function (data) {
    try {
      const { res } = await axios.post(
        `http://localhost:8080/api/favorites/add-favorite`,
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
        `http://localhost:8080/api/favorites/delete-favorite`,
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
        `http://localhost:8080/api/favorites/favorite-movies?email=${data}`,
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
