import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    isAuthenticated: false
  },
  reducers: {
  },
});

//export const  = userAuthSlice.actions; //Creators action

export default userAuthSlice.reducer; //La función reductora