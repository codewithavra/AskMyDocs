/**
 * Node Imports
 */
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center overflow-hidden bg-background text-foreground p-5">
        <Outlet />
    </div>
  )
}

export default RootLayout
