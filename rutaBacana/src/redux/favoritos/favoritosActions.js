import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  favoritosRequest,
  favoritosFail,
  addFavoritos,
  fillFavoritos,
  deleteFavorito,
} from "./favoritosSlice";
import { dataBase } from "../../firebase/firebaseconfig";

const COLLECTION_NAME = "favoritos";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionAddFavorite = (favorite) => {
  return async (dispatch) => {
    dispatch(favoritosRequest());

    try {
      const docRef = await addDoc(collectionRef, favorite);
      const nuevoFavorito = { id: docRef.id, ...favorite };

      const destinoRef = doc(dataBase, "destinos", favorite.idDestino);
      const destinoSnap = await getDoc(destinoRef);

      if (destinoSnap.exists()) {
        const destinoData = destinoSnap.data();
        const favoritoConDestino = { ...nuevoFavorito, ...destinoData };

        dispatch(addFavoritos(favoritoConDestino));
      }
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};

export const actionGetFavoritesByUser = (userId) => {
  return async (dispatch) => {
    dispatch(favoritosRequest());

    let favorites = [];

    try {
      const q = query(collectionRef, where("idUsuario", "==", userId));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });

      for (let index = 0; index < favorites.length; index++) {
        const favorite = favorites[index];
        const destinoRef = doc(dataBase, "destinos", favorite.idDestino);
        const destinoSnap = await getDoc(destinoRef);

        if (destinoSnap.exists()) {
          favorites[index] = { ...favorite, ...destinoSnap.data() };
        } else {
          favorites = favorites.filter((item) => item.id !== favorite.idDestino);
        }
      }

      dispatch(fillFavoritos(favorites));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};

export const actionDeleteFavoritos = (idFavorito) => {
  return async (dispatch) => {
    dispatch(favoritosRequest());

    try {
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idFavorito));
      dispatch(deleteFavorito(idFavorito));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};
