import logo from "../assets/images/netflix-logo.png";
import banner from "../assets/images/banner.jpg";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-full"
        style={{
          background: `url(${banner}) center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <img
            className="fixed left-0 top-5 w-[150px] object-contain pl-5"
            src={logo}
            alt=""
          />
          <Link to="/signin">
            <button className="fixed right-5 top-5 bg-[#e50914] py-[10px] px-5 text-base font-semibold text-white">
              Sign In
            </button>
          </Link>

          <div className="z-10 h-screen w-full bg-black/40 bg-gradient-to-t from-black/[.08] via-black/[.00] to-black/[.08]"></div>

          <div className="absolute right-0 top-[18%] left-0 z-[1] mx-auto p-5 text-center text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
