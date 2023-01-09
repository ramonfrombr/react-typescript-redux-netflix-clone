import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
