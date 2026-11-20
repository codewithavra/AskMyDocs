/**
 * Node Imports
 */

import type { ReactNode } from "react"

/**
 * Components
 */
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: ReactNode
}

const provider = ({ children }: Props) => {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
}

export default provider
