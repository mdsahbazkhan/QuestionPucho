import * as api from "../api";
import { setCurrentUser } from "./CurrentUser.js";
import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// export const forgotPassword = (email) => async (dispatch) => {
//   try {
//     const response = await axios.post('/api/auth/forgot-password', { email });
//     dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'FORGOT_PASSWORD_FAILURE', payload: error.response.data });
//   }
// };