import type { ReactNode } from "react"

interface ProviderProps {
    children : ReactNode
}
const providers = (children : ProviderProps) => {
  return (
    <>{children}</>
  )
}

export default providers