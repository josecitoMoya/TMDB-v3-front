import React from "react";
import axios from "axios";
import { useInput } from "../hooks/useInput";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUser } from "../state/thunks/userThunks";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();

  const isloading = useSelector((state) => state.user.isloading);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginUser = {
      email: email.value,
      password: password.value,
    };

    dispatch(fetchLoginUser(loginUser))
      .then((res) => alert(res))
      .then(navigate("/"));
  };

  return (
    <div>
      <h1>Yo soy el login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" required {...email} />
        <input type="password" placeholder="password" required {...password} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
