import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "../service/storageService";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async (skipTokenTest = false) => {
    try {
      const token = getToken();
      console.log("token!!", token);
      if (!token) return;
      const dataFromToken = jwtDecode(token);
      if (skipTokenTest) await axios.get(`/users/${dataFromToken._id}`);
      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      console.log("err from auto login", err);
      localStorage.clear();
    }
  };
};

export default useAutoLogin;
