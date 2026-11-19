/**
 * Node Imports
 */
import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";
import ErrorBoundary from "@/components/shared/ErrorBoundary";


const router = createBrowserRouter([{
    path : "/",
    Component : RootLayout,
    ErrorBoundary : ErrorBoundary,
    children : []
}])
export default router