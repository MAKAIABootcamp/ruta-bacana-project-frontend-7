import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../componentes/layout/Layout";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import About from "../pages/about/about";
import Details from "../pages/details/details";
import Destinos from "../pages/destinos/destinos";
import AgregarDestinos from "../pages/agregarDestinos/AgregarDestinos";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="agregarDestinos" element={<AgregarDestinos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;