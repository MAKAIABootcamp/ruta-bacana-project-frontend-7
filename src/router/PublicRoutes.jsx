import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ redirectPath = "/" }) => {
  const { isAuth } = useSelector((store) => store.userAuth);
  if (isAuth) return <Navigate to={redirectPath} />;
  return <Outlet />;
};

export default PublicRoutes;