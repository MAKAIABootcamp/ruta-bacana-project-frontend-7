import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
  import { collection } from "firebase/firestore";
  import { loginFail, loginRequest, loginSuccess, logout } from "./userAuthSlice";
  import { auth, dataBase } from "../../firebase/firebaseconfig";

    const COLLECTION_NAME = "usuarios";
    const collectionRef = collection(dataBase, COLLECTION_NAME);
  
  /*export const actionRegisterWithEmailAndPassword = ({
    email,
    password,
    name,
    photo,
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
        dispatch(
          loginSuccess({
            name: name,
            id: user.uid,
            accessToken: user.accessToken,
            email: email,
            photo: photo,
          })
        );
      } catch (error) {
        console.error(error);
        dispatch(loginFail(error.message));
      }
    };
  };*/
  
  export const actionLoginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
      dispatch(loginRequest());
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
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
            email: email,
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