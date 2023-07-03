import { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const context = useContext(AuthContext);
  const { user } = context;

  if (!user) {
    return <Navigate to="/auth"></Navigate>;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
