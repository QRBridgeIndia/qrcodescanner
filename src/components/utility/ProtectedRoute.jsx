import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const authToken = Cookies.get("authToken"); 

  return authToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
