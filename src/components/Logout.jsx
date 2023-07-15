import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogOut } from "../state/thunks/userThunks";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(fetchLogOut()).then(navigate("/"));
  };

  return (
    <div>
      <h1>Estas seguro que queres cerrar sesion?</h1>
      <button onClick={handleLogout}>SI</button>
      <button>NO</button>
    </div>
  );
};
