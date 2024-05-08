import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useBeforeUnload} from "react-router-dom";
import Layout from "../componentes/layout/Layout";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/Register";
import About from "../pages/about/about";
import DetailsPage from '../pages/details/details'
import Destinos from "../pages/destinos/destinos";
import AgregarDestinos from "../pages/agregarDestinos/AgregarDestinos";
import PhoneLogin from "../pages/phoneLogin/PhoneLogin";
import InsertCode from "../pages/insertCode/InsertCode";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess } from "../redux/userAuth/userAuthSlice";
import { auth } from "../firebase/firebaseconfig";


const AppRouter = () => {
  const { user } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  //const location = useLocation();
  //const navigate = useNavigate();

  //Nos aseguramos de guardar la última ruta en la que estuvimos antes de que sucediera la recarga
  /*useBeforeUnload(
    useCallback(() => {
      sessionStorage.setItem("currentRoute", JSON.stringify(location.pathname));
    }, [location.pathname])
  );*/

  /*useEffect(() => {
    const storeRoute = JSON.parse(sessionStorage.getItem("currentRoute"));
    if (storeRoute) {
      navigate(storeRoute);
    }
  }, []);*/

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential && !user) {
        dispatch(
          loginSuccess({
            id: userCredential.uid,
            name: userCredential.displayName,
            photo: userCredential.photoURL,
            accessToken: userCredential.accessToken,
            email: userCredential.email || null,
            phone: userCredential.phoneNumber || null,
          })
        );
      }
    });
  }, [user, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<DetailsPage />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="agregarDestinos" element={<AgregarDestinos />} />
          <Route path="edit/:idDestino" element={<AgregarDestinos />} />
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="phone" element={<PhoneLogin />} />
        <Route path="phone/insertCode/:phone" element={<InsertCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;