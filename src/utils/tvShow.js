import axios from "axios";

class FetchTvShow {
  static getTvShow = async function (tvShowId) {
    console.log("SOY EL ID", tvShowId);
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/tv-show/tv-show?id=${tvShowId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTvShowsCredits = async function (tvShowId) {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/tv-show/tv-show-credits?id=${tvShowId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getPopularTvShows = async function () {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/tv-show/popular-tv-shows`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTopRatedTvShows = async function () {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/tv-show/top-rated-tv-shows`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getUpComingTvShows = async function () {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/tv-show/up-coming-tv-shows`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchTvShow;
