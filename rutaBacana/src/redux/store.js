import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "./favoritos/favoritosSlice";
import userAuthReducer from ".//userAuth/userAuthSlice"
import destinosReducer from "./Destinos/destinosSlice";
import comentariosReducer from "./comentarios/comentariosSlice";
import negociosReducer from './negocios/negociosSlice'
import scrollReducer from './scroll/scrollSlice';

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    destinos: destinosReducer,
    comentarios: comentariosReducer,
    favoritos: favoritosReducer,
    negocios: negociosReducer,
    scroll: scrollReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
