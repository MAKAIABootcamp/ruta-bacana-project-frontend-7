import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseconfig";
import {
  addComentarios,
  deleteComentario,
  editComentario,
  fillComentarios,
  filterComentarios,
  comentariosFail,
  comentariosRequest,
} from "./comentariosSlice";

const COLLECTION_NAME = "comentarios"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionAddComentarios = (newComentario) => {
  return async (dispatch) => {
    dispatch(comentariosRequest());
    try {
      const docRef = addDoc(collectionRef, newComentario);
      dispatch(
        addComentarios({
          id: docRef.id,
          ...newComentario,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(comentariosFail(error.message));
    }
  };
};

export const actionGetComentarios = () => {
  return async (dispatch) => {
    dispatch(comentariosRequest());
    const comentarios = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        comentarios.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillComentarios(comentarios));
    } catch (error) {
      console.error(error);
      dispatch(comentariosFail(error.message));
    }
  };
};

export const actionFilterComentarios = (fieldName, fieldValue) => {
  return async (dispatch) => {
    console.log("fieldName:", fieldName);
    console.log("fieldValue:", fieldValue);
    dispatch(comentariosRequest());
    const comentarios = [];
    try {
      const q = query(collectionRef, where(fieldName, "==", fieldValue));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        comentarios.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("comentarios filtrados:", comentarios);
      dispatch(filterComentarios(comentarios));
    } catch (error) {
      console.error(error);
      dispatch(comentariosFail(error.message));
    }
  };
};

export const actionDeleteComentarios = (idComentario) => {
  return async (dispatch) => {
    dispatch(comentariosRequest())
    try {
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idComentario));
      dispatch(deleteComentario(idComentario));
    } catch (error) {
      console.error(error);
      dispatch(comentariosFail(error.message));
    }
  }
};

export const actionEditComentarios = (idComentario, editedComentario) => {
  return async (dispatch) => {
    dispatch(comentariosRequest());
    try {
      const comentarioRef = doc(dataBase, COLLECTION_NAME, idComentario);

      await updateDoc(comentarioRef, editedComentario);
      dispatch(
        editComentario({
          id: idComentario,
          ...editedComentario,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(comentariosFail(error.message));
    }
  };
};