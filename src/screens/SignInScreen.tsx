import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  /*
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email: string | null = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email!, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }*/

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
