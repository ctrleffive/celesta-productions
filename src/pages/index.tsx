// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

import { Layout } from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image";
import { HeroGallery } from "../components/HeroGallery";

const IndexPage: React.FC<PageProps> = () => {
  return <Layout>
    <section className="intro">
      <header>
        <h1>Celesta Productions</h1>
        <p>
          Media production and event management
        </p>
        <ul className="actions">
          <li>
          </li>
          <li>
            <span className="arrow scrolly" />
          </li>
        </ul>
      </header>
      <div className="content hero">
        <HeroGallery />
      </div>
    </section>

    <section>
      <header>
        <h2>Our works</h2>
      </header>
      <div className="content">
        <p>
          <strong>We</strong> pride ourselves on delivering exceptional audio experiences that not only meet but exceed client expectations, blending technical expertise with creative sound design seamlessly.
        </p>
        <span className="image main">
          <StaticImage src="../images/stage.jpg" className="rounded" alt="" />
        </span>
        <ul className="actions">
          <li>
            <Link to="/works" className="button primary large">
              See Our Works
            </Link>
          </li>
          <li>
            <Link to="/bookings" className="button large">
              Book an appointment
            </Link>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>What are we offering?</h2>
      </header>
      <div className="content">
        <p>
          <strong>We</strong> specialize in delivering top-tier audio and event management solutions tailored to meet your unique needs. Whether you're an artist, filmmaker, or planning a live event, our diverse services are designed to bring your creative visions to life.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-microphone-alt">Audio Recording</li>
          <li className="icon solid fa-music">Music Production</li>
          <li className="icon solid fa-wrench">Audio Mixing</li>
          <li className="icon solid fa-volume-up">Audio Mastering</li>
          <li className="icon solid fa-video">Preview Theater</li>
          <li className="icon solid fa-guitar">Jamming Room</li>
          <li className="icon solid fa-stream">Live Concerts</li>
          <li className="icon solid fa-microphone">Sync Sound</li>
          <li className="icon solid fa-dollar-sign">Sound Rental</li>
          <li className="icon solid fa-user-tie">Event Management</li>
        </ul>
        <p>
          From pre-production to post-production and event execution, we ensure every detail is handled with precision and care. Let us elevate your next project with our expert team and state-of-the-art facilities.
        </p>
        <span className="image main">
          <StaticImage src="../images/services.jpg" className="rounded" alt="" />
        </span>
      </div>
    </section>

    <section>
      <header>
        <h2>Who are we?</h2>
      </header>
      <div className="content">
        <p>
          <strong>We </strong> specialize in music production, recording, audiovisual rentals, event management, music bands, video editing, and more. Experience our professional services and let us bring your creative endeavors to life.
        </p>
        <span className="image main">
          <StaticImage src="../images/who-are-we.jpg" className="rounded" alt="" />
        </span>
      </div>
    </section>
  </Layout>
};

export default IndexPage;

export const Head: HeadFC = () => <title>Celesta Productions</title>;
