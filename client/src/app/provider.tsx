import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const provider = ({ children }: Props) => {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
}

export default provider
