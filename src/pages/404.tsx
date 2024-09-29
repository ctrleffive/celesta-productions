// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Footer } from "../components/Footer"
import { HeroGallery } from "../components/HeroGallery"

const NotFoundPage: React.FC<PageProps> = () => {
  return <Layout>
    <section className="intro">
      <header>
        <h1>Not Found</h1>
        <p>
        You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <ul className="actions">
          <li>
            <Link to="/" className="font-bold uppercase">Go home</Link>
          </li>
        </ul>
      </header>
      <div className="content">
        <HeroGallery   />
      </div>
    </section>
  </Layout>
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Celesta Productions - 404</title>
