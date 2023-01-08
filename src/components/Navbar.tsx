import { FC, useEffect, useState } from "react";
import logo from "../assets/images/netflix-logo.png";
import avatar from "../assets/images/netflix-avatar.png";

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
        <img className="fixed right-5 w-8 cursor-pointer" src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;