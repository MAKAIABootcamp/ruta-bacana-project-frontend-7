import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./UserAuth/userAuthSlice"
import destinosReducer from "./Destinos/destinosSlice";
import comentariosReducer from "./comentarios/comentariosSlice";
import negociosReducer from './negocios/negociosSlice'


const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    destinos: destinosReducer,
    comentarios: comentariosReducer,
    negocios: negociosReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;