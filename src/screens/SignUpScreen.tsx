import { useState } from "react";

const LoginScreen = () => {
  const [signUpEmail, setSignUpEmail] = useState("");

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
            onClick={() => alert("Not implemented yet")}
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
