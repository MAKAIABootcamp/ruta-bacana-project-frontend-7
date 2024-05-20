import { collection, query, where, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseconfig";
import { negociosRequest, negociosFail, fillNegocios } from "./negociosSlice";

const COLLECTION_NAME = "negocios";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionGetNegociosByDestinoId = (destinoId) => {
  return async (dispatch) => {
    const negocios = [];
    dispatch(negociosRequest());
    try {
        const q = query(collectionRef, where("idDestino", "==", destinoId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            negocios.push({
                id: doc.id,
                ...doc.data()
            })
        })
        dispatch(fillNegocios(negocios));
    } catch (error) {
      console.error(error);
      dispatch(negociosFail(error.message));
    }
  };
};
