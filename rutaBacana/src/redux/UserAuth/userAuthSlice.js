import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
  request: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialUser,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
      state.request = "login";
    },
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.request = "starting";
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.request = "error";
    },
    logout: (state) => {
      state.user = initialUser.user;
      state.isAuth = initialUser.isAuth;
      state.isLoading = initialUser.isLoading;
      state.error = initialUser.error;
      state.request = "logout";
    },
    setRequest: (state) => {
      state.request = null;
    },
  },
});

export const { loginSuccess, loginRequest, loginFail, logout, setRequest } =
  userAuthSlice.actions; //Creator actions
export default userAuthSlice.reducer; //Función reductora