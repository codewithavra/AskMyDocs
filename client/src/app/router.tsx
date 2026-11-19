/**
 * Node Imports
 */
import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";
import Error from "./Error";

const router = createBrowserRouter([{
    path : "/",
    Component : RootLayout,
    errorElement : <Error />,
    children : []
}])
export default router