import { createSlice } from "@reduxjs/toolkit";

const comentariosSlice = createSlice({
  name: "comentarios",
  initialState: {
    comentarios: [],
    isLoadingComentarios: false,
    errorComentarios: null,
    successRequest: null,
    isactiveFilter: false
  },
  reducers: {
    comentariosRequest: (state) => {
      state.isLoadingComentarios = true;
      state.errorComentarios = null;
      state.successRequest = null;
    },
    fillComentarios: (state, action) => {
      state.comentarios = action.payload;
      state.isLoadingComentarios = false;
      state.errorComentarios = null;
      state.successRequest = true;
      state.isactiveFilter = false;
    },
    comentariosFail: (state, action) => {
      (state.isLoadingComentarios = false),
        (state.errorComentarios = action.payload),
        (state.successRequest = false);
    },
    addComentarios: (state, action) => {
      state.comentarios.push(action.payload);
      state.isLoadingComentarios = false;
      state.successRequest = "addComentarios";
    },
    editComentario: (state, action) => {
      state.isLoadingComentarios = false;
      state.comentarios = state.comentarios.map((item) =>
        action.payload.id == item.id ? { ...item, ...action.payload } : item
      );
      state.successRequest = "editComentarios";
    },
    deleteComentario: (state, action) => {
      state.isLoadingComentarios = false;
      state.comentarios = state.comentarios.filter(
        (item) => item.id != action.payload
      );
      state.successRequest = true;
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },
    filterComentarios: (state, action) => {
      state.comentarios = action.payload;
      state.isLoadingComentarios = false;
      state.errorComentarios = null;
      state.successRequest = true;
      state.isactiveFilter = true;
    }
  },
});

export const {
  comentariosRequest,
  fillComentarios,
  comentariosFail,
  addComentarios,
  editComentario,
  deleteComentario,
  setSuccessRequest,
  filterComentarios,
} = comentariosSlice.actions; //Creators action

export default comentariosSlice.reducer; //La función reductora
