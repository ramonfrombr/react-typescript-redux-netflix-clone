import logo from "../assets/images/netflix-logo.png";
import banner from "../assets/images/banner.jpg";
import { Link, Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";
import { useAppDispatch } from "../app/hooks";
import { login, logout } from "../features/user/userSlice";
import { useEffect } from "react";

const AuthLayout = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid!,
            email: userAuth.email!,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div
      className="relative max-h-screen"
      style={{
        background: `url(${banner}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute z-40 flex w-full justify-between p-3">
        <img className="w-[150px] object-contain pl-5" src={logo} alt="" />
        <Link to="/signin">
          <button className="bg-[#e50914] py-[10px] px-5 text-base font-semibold text-white">
            Sign In
          </button>
        </Link>
      </div>

      <div className="flex h-screen w-full items-center">
        <div className="relative bottom-[30px] z-[11] mx-auto my-auto text-center text-white md:-bottom-[30px]">
          <Outlet />
        </div>
      </div>

      <div className="absolute top-0 left-0 z-10 h-screen w-full bg-black/40 bg-gradient-to-t from-black/[.08] via-black/[.00] to-black/[.08]"></div>
    </div>
  );
};

export default AuthLayout;
