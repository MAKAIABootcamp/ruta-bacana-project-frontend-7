import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scrollToFooter: false,
  },
  reducers: {
    triggerScrollToFooter: (state) => {
      state.scrollToFooter = true;
    },
    resetScrollToFooter: (state) => {
      state.scrollToFooter = false;
    },
  },
});

export const { triggerScrollToFooter, resetScrollToFooter } = scrollSlice.actions;

export default scrollSlice.reducer;
