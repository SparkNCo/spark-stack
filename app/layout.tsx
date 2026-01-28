import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./global.css"

export const metadata: Metadata = {
  title: "Agency Portal",
  description: "Client and Developer Portal"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}