import { Link } from "gatsby"
import * as React from "react"

export const SocialMedia = () => {
  return <ul className="icons">
    <li>
      <Link to="https://wa.me/918089901663" rel="noreferrer" className="icon brands fa-whatsapp">
        <span className="label">WhatsApp</span>
      </Link>
    </li>
    <li>
      <Link to="https://twitter.com/celestaprods" target="_blank" rel="noreferrer" className="icon brands fa-twitter">
        <span className="label">Twitter</span>
      </Link>
    </li>
    <li>
      <Link to="https://instagram.com/celestaproductions" rel="noreferrer" className="icon brands fa-instagram">
        <span className="label">Instagram</span>
      </Link>
    </li>
    <li>
      <Link to="https://youtube.com/@celestaproductions" target="_blank" className="icon brands fa-youtube" rel="noreferrer">
        <span className="label">YouTube</span>
      </Link>
    </li>
    <li>
      <Link to="https://g.page/r/CdMOApdolLRLEBM/review" target="_blank" className="icon brands fa-google" rel="noreferrer">
        <span className="label">Google</span>
      </Link>
    </li>
  </ul>
}
