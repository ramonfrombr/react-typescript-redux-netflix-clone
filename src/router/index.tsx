import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../screens/AuthLayout";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
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
