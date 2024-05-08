import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { loginFail, loginRequest, loginSuccess, logout } from "./userAuthSlice";
  import { auth, dataBase } from "../../firebase/firebaseconfig";
  import { collection, doc, getDoc, setDoc } from "firebase/firestore";
  
  const COLLECTION_NAME = "usuarios";
  const collectionRef = collection(dataBase, COLLECTION_NAME);
  
  export const actionRegisterWithEmailAndPassword = ({
    email,
    password,
    name,
    photo,
    //El resto de la información que el usuario ingresa en el formulario de registro
  }) => {
    return async (dispatch) => {
      dispatch(loginRequest());
      try {
        //Se crea el usuario en Firebase Auth
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
        //El usuario primero inicia sesión con firebase Auth
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
        //Se inicia sesión através del proveedor de acceso
        const userCredencial = await signInWithPopup(auth, provider);
        const user = userCredencial.user;
        //Se consulta si el usuario existe en la colección
  
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
          await setDoc(userRef, {
            name: user.displayName,
            email: email,
            photo: user.photoURL,
            accessToken: user.accessToken,
            role: "user",
            //Resto de la información del usuario, deben asignarle la propiedad pero darle un valor ya sea null o "" o información creada por defecto
          });
          dispatch(
            loginSuccess({
              id: user.uid,
              name: user.displayName,
              email: email,
              photo: user.photoURL,
              accessToken: user.accessToken,
              role: "user",
              //Resto de la información del usuario, deben asignarle la propiedad pero darle un valor ya sea null o "" o información creada por defecto
            })
          );
        }
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
        //Se inicia sesión con el código de verificación
        const response = await confirmationResult.confirm(code);
        const user = response.user;
        //Se consulta si el usuario existe en la colección
  
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
          await setDoc(userRef, {
            name: user.displayName,
            email: email,
            photo: user.photoURL,
            accessToken: user.accessToken,
            role: "user",
            //Resto de la información del usuario, deben asignarle la propiedad pero darle un valor ya sea null o "" o información creada por defecto
          });
          dispatch(
            loginSuccess({
              id: user.uid,
              name: user.displayName,
              email: email,
              photo: user.photoURL,
              accessToken: user.accessToken,
              role: "user",
              //Resto de la información del usuario, deben asignarle la propiedad pero darle un valor ya sea null o "" o información creada por defecto
            })
          );
        }
      } catch (error) {
        console.error(error);
        dispatch(loginFail(error.message));
      }
    };
  };