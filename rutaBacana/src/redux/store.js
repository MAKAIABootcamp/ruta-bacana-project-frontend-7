import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuth/userAuthSlice";
import destinosReducer from "./Destinos/destinosSlice";
import comentariosReducer from "./comentarios/comentariosSlice";
import favoritosReducer from "./favoritos/favoritosSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    destinos: destinosReducer,
    comentarios: comentariosReducer,
    favoritos: favoritosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
