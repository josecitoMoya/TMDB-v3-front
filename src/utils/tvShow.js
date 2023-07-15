import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

class FetchTvShow {
  static getTvShow = async function (tvShowId) {
    console.log("SOY EL ID", tvShowId);
    try {
      const { data } = await axios.get(
        `${baseURL}/tv-show/tv-show?id=${tvShowId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTvShowsCredits = async function (tvShowId) {
    try {
      const { data } = await axios.get(
        `${baseURL}/tv-show/tv-show-credits?id=${tvShowId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getPopularTvShows = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/tv-show/popular-tv-shows`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getTopRatedTvShows = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/tv-show/top-rated-tv-shows`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getUpComingTvShows = async function () {
    try {
      const { data } = await axios.get(`${baseURL}/tv-show/up-coming-tv-shows`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default FetchTvShow;
