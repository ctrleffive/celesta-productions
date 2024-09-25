// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page Not Found</title>
