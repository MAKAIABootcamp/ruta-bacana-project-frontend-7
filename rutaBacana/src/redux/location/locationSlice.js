import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/firebaseconfig';

export const fetchLocation = createAsyncThunk('location/fetchLocation', async (id) => {
  const docRef = doc(dataBase, 'Destinos', id); 
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.Coordenadas; 
  } else {
    throw new Error('No such document!');
  }
});

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    lat: 4.7110,
    lng: -74.0721,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lat = action.payload.lat;
        state.lng = action.payload.lng;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
