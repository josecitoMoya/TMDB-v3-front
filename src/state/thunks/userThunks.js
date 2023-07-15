import axios from "axios";
import { setError, setIsLoading, setUser, setUsers } from "../slices/userSlice";

const fetchUrl = process.env.REACT_APP_API_BASE_URL;

axios.defaults.withCredentials = true;

export const fetchCreateUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${fetchUrl}/users/singup`, data, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(setUser(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error("FetchCreateUser error: ", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};

export const fetchLoginUser = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(`${fetchUrl}/users/login`, data, {
      withCredentials: true,
      credentials: "include",
    });
    console.log(response.data);
    dispatch(setIsLoading(false));
    dispatch(setUser(response.data));
  } catch (err) {
    console.error("FetchLoginUser error", err);
  }
};

export const fetchPersistence = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(`${fetchUrl}/users/persistence`);
    dispatch(setIsLoading(false));
    dispatch(setUser(response.data));
  } catch (err) {
    console.error("Fetch persistence error: ", err);
  }
};

export const fetchLogOut = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(`${fetchUrl}/users/logout`);
    dispatch(setIsLoading(false));
    dispatch(setUser([]));
  } catch (err) {
    console.error("Fetch logOut error ", err);
  }
};
