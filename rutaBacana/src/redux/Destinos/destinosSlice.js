import { createSlice } from "@reduxjs/toolkit";

const destinosSlice = createSlice({
  name: "destinos",
  initialState: {
    destinos: [],
    isLoadingDestinos: false,
    errorDestinos: null,
    successRequest: null,
    isactiveFilter: false
  },
  reducers: {
    destinosRequest: (state) => {
      state.isLoadingDestinos = true;
      state.errorDestinos = null;
      state.successRequest = null;
    },
    fillDestinos: (state, action) => {
      state.destinos = action.payload;
      state.isLoadingDestinos = false;
      state.errorDestinos = null;
      state.successRequest = true;
      state.isactiveFilter = false;
    },
    destinosFail: (state, action) => {
      (state.isLoadingDestinos = false),
        (state.errorDestinos = action.payload),
        (state.successRequest = false);
    },
    addDestinos: (state, action) => {
      state.destinos.push(action.payload);
      state.isLoadingDestinos = false;
      state.successRequest = "addDestinos";
    },
    editDestino: (state, action) => {
      state.isLoadingDestinos = false;
      state.destinos = state.destinos.map((item) =>
        action.payload.id == item.id ? { ...item, ...action.payload } : item
      );
      state.successRequest = "editDestinos";
    },
    deleteDestino: (state, action) => {
      state.isLoadingDestinos = false;
      state.destinos = state.destinos.filter(
        (item) => item.id != action.payload
      );
      state.successRequest = true;
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },
    filterDestinos: (state, action) => {
      state.destinos = action.payload;
      state.isLoadingDestinos = false;
      state.errorDestinos = null;
      state.successRequest = true;
      state.isactiveFilter = true;
    }
  },
});

export const {
  destinosRequest,
  fillDestinos,
  destinosFail,
  addDestinos,
  editDestino,
  deleteDestino,
  setSuccessRequest,
  filterDestinos,
} = destinosSlice.actions; //Creators action

export default destinosSlice.reducer; //La función reductora