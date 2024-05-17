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
    dispatch(favoritosRequest()); // Se inicia la solicitud

    try {
      // Se agrega el favorito a la base de datos
      const docRef = await addDoc(collectionRef, favorite);
      const nuevoFavorito = { id: docRef.id, ...favorite };

      // Despacha la acción para agregar el favorito al estado local
      dispatch(addFavoritos(nuevoFavorito));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message)); // Manejo de errores
    }
  };
};

// Acción para obtener los favoritos de un usuario
export const actionGetFavoritesByUser = (userId) => {
  return async (dispatch) => {
    dispatch(favoritosRequest()); // Se inicia la solicitud

    let favorites = [];

    try {
      // Se obtienen los favoritos del usuario desde Firestore
      const q = query(collectionRef, where("idUsuario", "==", userId));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });

      // Por cada favorito, se obtiene información adicional del destino y se actualiza la lista de favoritos
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

      // Se despacha la acción para llenar el estado con los favoritos obtenidos
      dispatch(fillFavoritos(favorites));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message)); // Manejo de errores
    }
  };
};

// Acción para eliminar un favorito
export const actionDeleteFavoritos = (idFavorito) => {
  return async (dispatch) => {
    dispatch(favoritosRequest()); // Se inicia la solicitud

    try {
      // Se elimina el favorito de la base de datos
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idFavorito));

      // Se despacha la acción para eliminar el favorito del estado local
      dispatch(deleteFavorito(idFavorito));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message)); // Manejo de errores
    }
  };
};
