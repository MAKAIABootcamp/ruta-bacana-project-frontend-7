import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuth/userAuthSlice";
import destinosReducer from "./Destinos/destinosSlice";
import comentariosReducer from "./comentarios/comentariosSlice";


const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    destinos: destinosReducer,
    comentarios: comentariosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;