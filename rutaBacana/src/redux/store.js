import { configureStore } from "@reduxjs/toolkit";
// import userAuthReducer from "./userAuth/userAuthSlice";
import destinosReducer from "./Destinos/destinosSlice";

const store = configureStore({
  reducer: {
    // userAuth: userAuthReducer,
    destinos: destinosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;