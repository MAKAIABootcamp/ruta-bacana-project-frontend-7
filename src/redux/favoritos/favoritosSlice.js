import { createSlice } from "@reduxjs/toolkit";

const favoritosSlice = createSlice({
  name: "favoritos",
  initialState: {
    favoritos: [],
    isLoadingFavoritos: false,
    errorFavoritos: null,
    successRequest: null,
    isactiveFilter: false
  },
  reducers: {
    favoritosRequest: (state) => {
      state.isLoadingFavoritos = true;
      state.errorFavoritos = null;
      state.successRequest = null;
    },
    fillFavoritos: (state, action) => {
      state.favoritos = action.payload;
      state.isLoadingFavoritos = false;
      state.errorFavoritos = null;
      state.successRequest = true;
      state.isactiveFilter = false;
    },
    favoritosFail: (state, action) => {
      (state.isLoadingFavoritos = false),
        (state.errorFavoritos = action.payload),
        (state.successRequest = false);
    },
    addFavoritos: (state, action) => {
      state.favoritos.push(action.payload);
      state.isLoadingFavoritos = false;
      state.successRequest = "addFavoritos";
    },
    deleteFavorito: (state, action) => {
      state.isLoadingFavoritos = false;
      state.favoritos = state.favoritos.filter(
        (item) => item.id != action.payload
      );
      state.successRequest = true;
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },
    filterFavoritos: (state, action) => {
      state.favoritos = action.payload;
      state.isLoadingFavoritos = false;
      state.errorFavoritos = null;
      state.successRequest = true;
      state.isactiveFilter = true;
    }
  },
});

export const {
  favoritosRequest,
  fillFavoritos,
  favoritosFail,
  addFavoritos,
  deleteFavorito,
  setSuccessRequest,
  filterFavoritos,
} = favoritosSlice.actions; //Creators action

export default favoritosSlice.reducer; //La función reductora