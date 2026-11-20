/**
 * Node Imports
 */
import { createBrowserRouter, Navigate } from "react-router"

/**
 * Layouts
 */
import RootLayout from "@/app/layouts/RootLayout"
import AuthLayout from "./layouts/AuthLayout"
import ProtectedLayout from "./layouts/ProtectedLayout"

/**
 * Components
 */
import Error from "@/components/shared/Error"
import Loader from "@/components/shared/Loader"


/**
 * Middlewares
 */
import { authMiddleware, guestMiddleware } from "./middlewares/auth.middleware"

/**
 * Pages
 */
import Login from "@/features/auth/pages/Login"
import Signup from "@/features/auth/pages/Signup"
import Home from "@/features/workspace/pages/Home"
import Profile from "@/features/workspace/pages/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    loader : Loader,
    children: [
      {
        middleware: [guestMiddleware],
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "signup",
            Component: Signup,
          },
        ],
      },
      {
        middleware: [authMiddleware],
        Component: ProtectedLayout,
        children: [
          {
            path: "home",
            Component: Home,
          },
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/home" replace />,
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])

export default router
