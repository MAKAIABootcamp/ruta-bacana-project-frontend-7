import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "./favoritos/favoritosSlice";
import userAuthReducer from "./UserAuth/userAuthSlice"
import destinosReducer from "./Destinos/destinosSlice";
import comentariosReducer from "./comentarios/comentariosSlice";
import negociosReducer from './negocios/negociosSlice'


const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    destinos: destinosReducer,
    comentarios: comentariosReducer,
    favoritos: favoritosReducer,
    negocios: negociosReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
