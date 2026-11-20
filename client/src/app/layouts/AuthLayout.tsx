/**
 * Node Imports
 */

import { Outlet } from "react-router"

/**
 * Components
 */
import Sidebar from "@/features/auth/components/Sidebar"

const AuthLayout = () => {
  return (
    <div className="h-full w-full flex-col md:flex-row justify-center items-center">
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default AuthLayout