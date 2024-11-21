"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Ensures the theme provider only renders on the client-side
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return null or a placeholder while the client is mounting
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
