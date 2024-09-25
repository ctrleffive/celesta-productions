import { Link } from "gatsby";
import * as React from "react";

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
            <Link to="/booking" className="button primary large">
              Book an appointment
            </Link>
          </li>
          <li>
            <Link to="/location" className="button large">
              Get directions
            </Link>
          </li>
        </ul>
      </div>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="mailto:connect@celestaprodctions.com">connect@celestaprodctions.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:+918089901663">+91 8089901663</a>
            <br />
            <a href="tel:+919146987601">+91 9146987601</a>
          </li>
          <li>
            <h3>Address</h3>
            <span>Celesta Productions, 12/710-B, Cliff House, Alummoodu, Kaniyapuram, Thiruvananthapuram, Kerala, India.<br />PIN: 695 301</span>
          </li>
          <li>
            <h3>Elsewhere</h3>
            <ul className="icons">
              <li>
                <a href="https://wa.me/918089901663" rel="noreferrer" className="icon brands fa-whatsapp">
                  <span className="label">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/celestaprods" target="_blank" rel="noreferrer" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/celestaproductions" rel="noreferrer" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@celestaproductions" target="_blank" className="icon brands fa-youtube" rel="noreferrer">
                  <span className="label">YouTube</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </section>

    <div className="copyright">
      &copy; Celesta Productions. All rights reserved.
    </div>
  </>
}
