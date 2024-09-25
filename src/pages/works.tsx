// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Footer } from "../components/Footer"

const WorksPage: React.FC<PageProps> = () => {
  return <Layout>
    <section className="intro">
      <header>
        <h1>Our Works</h1>
        <p>
          We are still working on this page. Please come back later.
        </p>
        <ul className="actions">
          <li>
            <Link to="/" className="font-bold uppercase">Go home</Link>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill !flex items-center justify-center" data-position="center">
          <StaticImage src="../images/logo.svg" className="rounded-full overflow-hidden" width={250} height={250} alt="Celesta Productions" />
        </span>
      </div>
    </section>
  </Layout>
}

export default WorksPage

export const Head: HeadFC = () => <title>Celesta Productions - Works</title>
