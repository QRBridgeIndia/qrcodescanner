import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = () => {
  const authToken = Cookies.get("authToken"); 

  return authToken ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
