import { createSlice } from "@reduxjs/toolkit";

const negociosSlice = createSlice({
  name: "negocios",
  initialState: {
    negocios: [],
    isLoadingNegocios: false,
    errorNegocios: null,
    successRequest: null,
    isactiveFilter: false,
  },
  reducers: {
    negociosRequest: (state) => {
      state.isLoadingNegocios = true;
      state.errorNegocios = null;
      state.successRequest = null;
    },
    fillNegocios: (state, action) => {
      state.negocios = action.payload;
      state.isLoadingNegocios = false;
      state.errorNegocios = null;
      state.successRequest = true;
      state.isactiveFilter = false;
    },
    negociosFail: (state, action) => {
      (state.isLoadingNegocios = false),
        (state.errorNegocios = action.payload),
        (state.successRequest = false);
    },
    addNegocios: (state, action) => {
      state.negocios.push(action.payload);
      state.isLoadingNegocios = false;
      state.successRequest = "addNegocios";
    },
  },
});

export const { negociosRequest, fillNegocios, negociosFail, addNegocios } =
  negociosSlice.actions; //Creators action

export default negociosSlice.reducer; //La función reductora
