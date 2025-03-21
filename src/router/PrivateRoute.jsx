import { useContext } from "react";
import { AuthContext } from "../components/firebase/AuthProvider";
import Loading from "../pages/loading/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loading></Loading>;
  if (user) return children;
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
