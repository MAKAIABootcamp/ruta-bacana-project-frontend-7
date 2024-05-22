import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';

export const SET_LOCATION = 'SET_LOCATION';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const fetchLocation = () => async (dispatch) => {
  const docRef = doc(dataBase, 'locations', 'bogota'); // Asegúrate de tener este documento en tu Firestore
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    dispatch(setLocation({ lat: data.lat, lng: data.lng }));
  } else {
    console.log('No such document!');
  }
};
