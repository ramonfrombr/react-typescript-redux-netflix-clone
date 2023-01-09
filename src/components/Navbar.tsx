import { FC, useEffect, useState } from "react";
import logo from "../assets/images/netflix-logo.png";
import avatar from "../assets/images/netflix-avatar.png";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const Navbar: FC = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.localStorage.setItem("isLoggedIn", "false");
        navigate("/signin");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return (
    <div
      className={`fixed top-0 z-30 h-14 w-full p-3 transition duration-500 ${
        show ? "bg-[#111111]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between">
        <img
          className="fixed left-0 top-5 w-24 cursor-pointer object-contain pl-5"
          src={logo}
          alt=""
        />

        <div className="fixed right-5 flex items-center">
          {loading ? (
            <BeatLoader color="white" />
          ) : auth.currentUser ? (
            <>
              <img
                className="mr-1 w-6 cursor-pointer md:w-8"
                src={avatar}
                alt=""
              />
              <span className="mr-2 text-white">
                {auth?.currentUser?.email}
              </span>

              <button
                className="bg-red-500 p-1 font-bold text-white md:p-2"
                onClick={onSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signin">
              <button className="bg-red-500 p-1 font-bold text-white">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
