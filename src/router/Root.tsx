import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";

const Root: FC = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // LoggedIN
        console.log(userAuth);
      } else {
        // loggedOut
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
};

export default Root;
