import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseconfig";
import {
  addFavoritos,
  deleteFavorito,
  editFavorito,
  fillFavoritos,
  filterFavoritos,
  favoritosFail,
  favoritosRequest,
} from "./favoritosSlice";

const COLLECTION_NAME = "favoritos"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionAddFavoritos = (newFavorito) => {
  return async (dispatch) => {
    dispatch(favoritosRequest());
    try {
      const docRef = addDoc(collectionRef, newFavorito);
      dispatch(
        addFavoritos({
          id: docRef.id,
          ...newFavorito,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};

export const actionGetFavoritos = () => {
  return async (dispatch) => {
    dispatch(favoritosRequest());
    const favoritos = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        favoritos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillFavoritos(favoritos));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};

export const actionFilterFavoritos = (fieldName, fieldValue) => {
  return async (dispatch) => {
    console.log("fieldName:", fieldName);
    console.log("fieldValue:", fieldValue);
    dispatch(favoritosRequest());
    const favoritos = [];
    try {
      const q = query(collectionRef, where(fieldName, "==", fieldValue));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        favoritos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("favoritos filtrados:", favoritos);
      dispatch(filterFavoritos(favoritos));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};

export const actionDeleteFavoritos = (idFavorito) => {
  return async (dispatch) => {
    dispatch(favoritosRequest())
    try {
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idFavorito));
      dispatch(deleteFavorito(idFavorito));
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  }
};

export const actionEditFavoritos = (idFavorito, editedFavorito) => {
  return async (dispatch) => {
    dispatch(favoritosRequest());
    try {
      const favoritoRef = doc(dataBase, COLLECTION_NAME, idFavorito);

      await updateDoc(favoritoRef, editedFavorito);
      dispatch(
        editFavorito({
          id: idFavorito,
          ...editedFavorito,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(favoritosFail(error.message));
    }
  };
};