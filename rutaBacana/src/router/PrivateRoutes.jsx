// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoutes = () => {
//   return <Outlet />;
// };

// export default PrivateRoutes;




import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ redirectPath = "/login" }) => {
  const { isAuth } = useSelector((store) => store.userAuth);
  if (!isAuth) return <Navigate to={redirectPath} />;
  return <Outlet />;
};

export default PrivateRoutes;