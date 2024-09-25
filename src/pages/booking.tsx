// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { InlineWidget } from "react-calendly"

const BookingPage: React.FC<PageProps> = () => {
  return <Layout>
    <section className="intro">
      <header>
        <h1>Booking</h1>
        <p>
          Book a slot now for a hassle-free experience, and we will give you a call!
        </p>
        <ul className="actions">
          <li>
            <Link to="/" className="font-bold uppercase">Go home</Link>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <InlineWidget url="https://calendly.com/celestaproductions/appointment" pageSettings={{
            hideEventTypeDetails: true,
            hideGdprBanner: true,
            hideLandingPageDetails: true,
          }}
            styles={{ height: "100%" }} />
        </span>
      </div>
    </section>
  </Layout>
}

export default BookingPage

export const Head: HeadFC = () => <title>Celesta Productions - Booking</title>
