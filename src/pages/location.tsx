import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const LocationPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://www.google.com/maps/dir//Celesta+Productions/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3b05bfa8fa103c45:0x4bb4946897020ed3?sa=X&ved=1t:3061&ictx=111"
    }, 3000)
  }, [])

  return <Layout>
    <section className="intro">
      <header>
        <h1>please wait...</h1>
        <p>
          We are preparing the directions for you to find us.
        </p>
        <ul className="actions">
          <li>
            <Link to="/" className="font-bold uppercase">Go home</Link>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill !flex items-center justify-center" data-position="center">
          <StaticImage src="../images/google-maps.svg" alt="Google Maps" />
        </span>
      </div>
    </section>
  </Layout>
}

export default LocationPage

export const Head: HeadFC = () => <title>Celesta Productions - Location</title>
