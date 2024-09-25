// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { Layout } from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image";

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
            <span className="arrow scrolly" />
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill !flex items-center justify-center" data-position="center">
          <StaticImage src="../images/logo.svg" className="rounded-full overflow-hidden" width={250} height={250} alt="Celesta Productions" />
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

    {/* <section>
      <header>
        <h2>Ultrices erat magna sed condimentum</h2>
      </header>
      <div className="content">
        <p>
          <strong>Integer mollis egestas</strong> nam maximus erat id euismod
          egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
        </p>

        <section>
          <header>
            <h3>Erat aliquam</h3>
            <p>
              Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
              etiam consequat, et lorem adipiscing sed dolor sit amet,
              consectetur amet do eiusmod tempor incididunt ipsum suspendisse
              ultrices gravida.
            </p>
          </header>
          <div className="content">
            <Gallery
              images={images01.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )}
            />
          </div>
        </section>

        <section>
          <header>
            <h3>Nisl consequat</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              aliquam sed facilisis ante interdum congue. Integer mollis, nisl
              amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna
              finibus nisi nec lacinia ipsum maximus.
            </p>
          </header>
          <div className="content">
            <Gallery
              images={images02.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )}
            />
          </div>
        </section>

        <section>
          <header>
            <h3>Lorem gravida</h3>
            <p>
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem
              feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem
              ullamcorper dolore. ac varius enim lorem ullamcorper dolore. Proin
              aliquam facilisis.
            </p>
          </header>
          <div className="content">
            <Gallery
              images={images03.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )}
            />
          </div>
        </section>
      </div>
    </section> */}

    {/* <section>
      <header>
        <h2>Duis sed adpiscing veroeros amet</h2>
      </header>
      <div className="content">
        <p>
          <strong>Proin tempus feugiat</strong> sed varius enim lorem
          ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
          lorem ullamcorper dolore.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button primary large">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button large">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
};

export default IndexPage;

export const Head: HeadFC = () => <title>Celesta Productions</title>;
