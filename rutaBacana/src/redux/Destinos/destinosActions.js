import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseconfig";
import {
  addDestinos,
  deleteDestino,
  editDestino,
  fillDestinos,
  filterDestinos,
  destinosFail,
  destinosRequest,
} from "./destinosSlice";

const COLLECTION_NAME = "destinos"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionAddDestinos = (newDestino) => {
  return async (dispatch) => {
    dispatch(destinosRequest());
    try {
      const docRef = addDoc(collectionRef, newDestino);
      dispatch(
        addDestinos({
          id: docRef.id,
          ...newDestino,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(destinosFail(error.message));
    }
  };
};

export const actionGetDestinos = () => {
  return async (dispatch) => {
    dispatch(destinosRequest());
    const destinos = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        destinos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillDestinos(destinos));
    } catch (error) {
      console.error(error);
      dispatch(destinosFail(error.message));
    }
  };
};

export const actionFilterDestinos = (fieldName, fieldValue) => {
  return async (dispatch) => {
    console.log("fieldName:", fieldName);
    console.log("fieldValue:", fieldValue);
    dispatch(destinosRequest());
    const destinos = [];
    try {
      const q = query(collectionRef, where(fieldName, "==", fieldValue));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        destinos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("Destinos filtrados:", destinos);
      dispatch(filterDestinos(destinos));
    } catch (error) {
      console.error(error);
      dispatch(destinosFail(error.message));
    }
  };
};


export const actionDeleteDestinos = (idDestino) => {
  return async (dispatch) => {
    dispatch(destinosRequest())
    try {
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idDestino));
      dispatch(deleteDestino(idDestino));
    } catch (error) {
      console.error(error);
      dispatch(destinosFail(error.message));
    }
  }
};

export const actionEditDestinos = (idDestino, editedDestino) => {
  return async (dispatch) => {
    dispatch(destinosRequest());
    try {
      const destinoRef = doc(dataBase, COLLECTION_NAME, idDestino);

      await updateDoc(destinoRef, editedDestino);
      dispatch(
        editDestino({
          id: idDestino,
          ...editedDestino,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(destinosFail(error.message));
    }
  };
};