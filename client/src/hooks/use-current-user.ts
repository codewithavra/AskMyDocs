/**
 * Node Imports
 */
import { authClient } from "@/lib/auth-client"

export const useCurrentUser = () => {
  const { data: session, isPending, error } = authClient.useSession()

  return {
    user : session?.user ?? null,
    session,
    isPending,
    error,
    isAuthenticated : !!session?.user
  }
}
