import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return <>
    <section>
      <header>
        <h2>Contact Us</h2>
      </header>
      <div className="content">
        <p>
          <strong>Get in touch</strong> with us for seamless services tailored to your needs. Reach out today to discuss how we can bring your next event to life!
        </p>
        <ul className="actions">
          <li>
            <Link to="/bookings" className="button primary large">
              Book an appointment
            </Link>
          </li>
          <li>
            <Link to="/location" className="button large">
              Get directions
            </Link>
          </li>
        </ul>
        <span className="image main">
          <StaticImage src="../images/on-air.jpg" className="rounded" alt="" />
        </span>
      </div>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="mailto:connect@celestaproductions.com">connect@celestaproductions.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:+918089901663">+91 8089901663</a>
            <br />
            <a href="tel:+919146987601">+91 9146987601</a>
          </li>
          <li>
            <h3>Address</h3>
            <span>Celesta Productions, 12/710-B, Cliff House, Alummoodu, Kaniyapuram, Thiruvananthapuram, Kerala, India. PIN: 695 301</span>
          </li>
          <li>
            <h3>Elsewhere</h3>
            <SocialMedia />
          </li>
        </ul>
      </footer>
    </section>

    <div className="copyright">
      &copy; Celesta Productions. All rights reserved.
    </div>
  </>
}
