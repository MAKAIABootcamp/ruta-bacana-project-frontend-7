// import { auth, dataBase } from "../../firebase/firebaseconfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";

// export const registerUser = (user)=> {
//     return async (dispatch) => {
//         try {
//             console.log("usuarios en action", user)
//             await createUserWithEmailAndPassword(auth, user.correo, user.contraseña)
//             const docRef = await addDoc(collection(dataBase, "usuarios"), user);
//             console.log("Document written with ID: ", docRef.id);

//         } catch (error) {

//         }
//     }
// }

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { loginFail, loginRequest, loginSuccess, logout } from "./userAuthSlice";
import { auth, dataBase } from "../../firebase/firebaseconfig";

const COLLECTION_NAME = "usuarios";
const collectionRef = collection(dataBase, COLLECTION_NAME);

export const actionRegisterWithEmailAndPassword = ({
  email,
  password,
  name,
  photo = null,
}) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      //Creamos el usuaio en la colleción de usuarios
      const userRef = doc(dataBase, COLLECTION_NAME, user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
        photo: photo,
        accessToken: user.accessToken,
        role: "user",
        favoritos: [],
        //Resto de la información que se necesita guardar en la colección
      });
      dispatch(
        loginSuccess({
          name: name,
          id: user.uid,
          accessToken: user.accessToken,
          email: email,
          photo: photo,
          //Resto de la información del usuario
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      //Obtenemos los datos del usuario logueado con firebase Auth desde la colección
      const userRef = doc(dataBase, COLLECTION_NAME, user.uid);
      const userSnap = await getDoc(userRef);

      if (userRef.exists()) {
        dispatch(
          loginSuccess({
            id: user.uid,
            ...userSnap.data(),
          })
        );
      } else {
        dispatch(loginFail("El usuario no existe en nuestra base de datos"));
      }
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLogout = () => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLoginWithOtherProviders = (provider) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const userCredencial = await signInWithPopup(auth, provider);
      const user = userCredencial.user;
      dispatch(
        loginSuccess({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          accessToken: user.accessToken,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLoginWithCode = (code) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    const confirmationResult = window.confirmationResult;
    try {
      const response = await confirmationResult.confirm(code);
      const user = response.user;
      dispatch(
        loginSuccess({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          phone: user.phoneNumber,
          accessToken: user.accessToken,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};
