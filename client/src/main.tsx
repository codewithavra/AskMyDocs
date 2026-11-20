/**
 * Node Imports
 */
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"

/**
 * Other Imports
 */
import router from "@/app/router.tsx"
import Provider from "@/app/provider"
/**
 * Style
 */
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
