/**
 * Node Imports
 */
import { createBrowserRouter } from "react-router";

/**
 * Other Imports
 */
import RootLayout from "@/app/layouts/RootLayout";

const router = createBrowserRouter([
    {
        path : "/",
        Component : RootLayout,
        children : []

    }
])

export default router