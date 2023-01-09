import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../screens/AuthLayout";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Root from "./Root";
import { auth } from "../firebase";

const user = auth.currentUser;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: !user ? <SignInScreen /> : <Navigate replace to={"/"} />,
      },
      {
        path: "signup",
        element: !user ? <SignUpScreen /> : <Navigate replace to={"/"} />,
      },
    ],
  },
]);

export default router;
