import { MouseEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { auth } from "../firebase";

import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="mx-auto box-content max-w-[300px] bg-black/[0.85] p-[70px]">
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

        <h4 className="mt-[30px] text-left font-bold">
          <span className="text-gray-600">New to Netflix? </span>
          <Link
            to="/auth/signup"
            className="hover:cursor-pointer hover:underline"
          >
            Sign up now
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
