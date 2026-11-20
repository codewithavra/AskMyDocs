import { Outlet } from "react-router"

/**
 * Node Imports
 */
const ProtectedLayout = () => {
  return (
    <div className="size-full flex justify-center items-center">
        <Outlet/>
    </div>
  )
}

export default ProtectedLayout