// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Footer } from "../components/Footer"
import { HeroGallery } from "../components/HeroGallery"

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
        <HeroGallery />
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
  </Layout>
}

export default WorksPage

export const Head: HeadFC = () => <title>Celesta Productions - Works</title>
