import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        window.localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInWithDemoUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, "demo-user@gmail.com", "123456")
      .then((userCredential) => {
        // Signed in

        window.localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="mx-auto box-content max-w-[300px] bg-black/[0.85] p-[50px]">
      <form className="grid flex-col [&>input]:mb-[14px] [&>input]:h-[40px] [&>input]:rounded [&>input]:border-0 [&>input]:p-[10px] [&>input]:py-[5px] [&>input]:px-[15px] [&>input]:text-black [&>input]:outline-0">
        <h1 className="mb-6 text-left text-3xl font-bold">Sign In</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button
          className="mt-5 rounded bg-[#e50914] py-4 px-5 text-base font-semibold text-white"
          onClick={signIn}
        >
          Sign In
        </button>

        <button
          className="mt-5 flex items-center justify-center rounded bg-gray-600 py-4 px-5 text-base font-semibold text-white"
          onClick={signInWithDemoUser}
        >
          <FaTools className="mr-2" />
          Sign In with Demo User
        </button>

        <h4 className="mt-[30px] text-left font-bold">
          <span className="text-gray-600">New to Netflix? </span>
          <Link to="/signup" className="hover:cursor-pointer hover:underline">
            Sign up now
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
