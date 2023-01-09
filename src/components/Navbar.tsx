import { FC, useEffect, useState } from "react";
import logo from "../assets/images/netflix-logo.png";
import avatar from "../assets/images/netflix-avatar.png";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signout");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return (
    <div
      className={`fixed top-0 z-10 h-14 w-full p-3 transition duration-500 ${
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
          <img className="mr-1 w-8 cursor-pointer" src={avatar} alt="" />

          {auth.currentUser ? (
            <>
              <span className="mr-2 text-white">
                {auth?.currentUser?.email}
              </span>

              <button
                className="bg-red-500 p-2 font-bold text-white"
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
