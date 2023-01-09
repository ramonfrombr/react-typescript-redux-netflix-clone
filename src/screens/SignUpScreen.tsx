import { useState } from "react";
import { MouseEvent } from "react";
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

const LoginScreen = () => {
  const [signUpEmail, setSignUpEmail] = useState("");

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };

  const sendSignUpEmailLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(signUpEmail);
    sendSignInLinkToEmail(auth, signUpEmail, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", signUpEmail);
        // ...
        console.log("Email was sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  return (
    <>
      <h1 className="mb-5 text-5xl">
        Unlimited films, TV programmes and more.
      </h1>

      <h2 className="mb-8 text-2xl font-normal">
        Watch anywhere. Cancel at any time.
      </h2>

      <h3 className="text-lg font-normal">
        Ready to watch? Enter your email to create or restart your membership
      </h3>

      <div className="m-5">
        <form>
          <input
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            className="w-1/3 max-w-[600px] p-3 text-black outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button
            onClick={sendSignUpEmailLink}
            className="bg-[#e50914] px-5 py-3 text-base font-semibold text-white"
          >
            GET STARTED
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
