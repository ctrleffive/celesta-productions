import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="text-5xl">404</div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page Not Found</title>
