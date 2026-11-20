/**
 * Node Imports
 */

import { authClient } from "@/lib/auth-client"
import { redirect } from "react-router"

// guest middleware
const guestMiddleware = async (_args: unknown, next: () => Promise<unknown>) => {
  const { data: session } = await authClient.getSession()
  if (session) {
    throw redirect("/home")
  }
  await next()
}
// auth middleware
const authMiddleware = async (_args: unknown, next: () => Promise<unknown>) => {
  const { data: session, error } = await authClient.getSession()

  if (error || !session) {
    throw redirect("/login")
  }

  await next()
}
export { guestMiddleware, authMiddleware }
