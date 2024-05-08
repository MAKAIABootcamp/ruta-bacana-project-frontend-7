import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { loginFail, loginRequest, loginSuccess, logout } from "./userAuthSlice";
  import { auth } from "../../firebase/firebaseconfig";
  
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
        const { user } = await signInWithEmailAndPassword(auth, email, password);
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
  
  export const actionLogout = () => {
    console.log("Acción de logout despachada");
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