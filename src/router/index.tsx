import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../screens/AuthLayout";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Root from "./Root";

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
        element: <SignInScreen />,
      },
      {
        path: "signup",
        element: <SignUpScreen />,
      },
    ],
  },
]);

export default router;
