// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { HeroGallery } from "../components/HeroGallery"
import { SocialMedia } from "../components/SocialMedia"

const works = [
  {
    title: "Chotta Betta",
    description: "We were responsible for the complete background score and audio mixing for this mini web series. Our team ensured the sound quality perfectly complemented the series' overall mood and tone.",
    image: <StaticImage src="../images/works/chotta-betta.jpg" className="rounded" alt="" />,
    linkUrl: "https://drive.google.com/file/d/1nGI4KPlKv0jM-roGPvx1jKOb2sez6ViG/view?usp=sharing",
    linkLabel: "View episode 2 in Google Drive",
  },
  {
    title: "Casino",
    description: "Casino is a Malayalam short film set in a zombie post-apocalyptic world, directed by Manosh. We handled the dubbing, background score, sound effects (FX), and final audio mixing for this project.",
    image: <StaticImage src="../images/works/casino.jpg" className="rounded" alt="" />,
    linkUrl: "https://www.youtube.com/watch?v=00Qk498dE8E",
    linkLabel: "View in YouTube",
  },
  {
    title: "Kozhi",
    description: "We created both the background music (BGM) and sound effects (SFX) for this project. Our work enhanced the overall audio experience, adding depth to the production.",
    image: <StaticImage src="../images/works/kozhi.jpg" className="rounded" alt="" />,
    linkUrl: "https://www.youtube.com/watch?v=P-JQ3IOaDcg",
    linkLabel: "View in YouTube",
  },
  {
    title: "The Girl",
    description: "For this project, we provided a complete package of audio services, including the background score, sound effects (SFX), mixing, and mastering. Each element was crafted to bring the sound design to life.",
    image: <StaticImage src="../images/works/the-girl.jpg" className="rounded" alt="" />,
    linkUrl: "https://www.youtube.com/watch?v=HYVvGKHOVFo",
    linkLabel: "View in YouTube",
  },
  {
    title: "Vaseegara",
    description: "Sam's flute cover is truly mesmerizing, and we were proud to handle the audio mixing for it. Our team worked to ensure the clarity and balance of the sound in this beautiful performance.",
    image: <StaticImage src="../images/works/vaseegara.jpg" className="rounded" alt="" />,
    linkUrl: "https://www.youtube.com/watch?v=EMnCM_U3J4E",
    linkLabel: "View in YouTube",
  },
]

const WorksPage: React.FC<PageProps> = () => {
  return <Layout>
    <section className="intro">
      <header>
        <h1>Our Works</h1>
        <p>Crafting soundscapes, amplifying stories, elevating experiences.</p>
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

    <section>
      <header>
        <h2>Hear what we create</h2>
      </header>
      <div className="content">
        <p>
          <strong>We</strong> are dedicated to creating extraordinary audio experiences that exceed client expectations by skillfully combining technical expertise with innovative sound design. Check out our works!
        </p>

        {works.map((item, index) => {
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          return <section key={index}>
            <header>
              <h3><Link to={item.linkUrl} target="_blank" rel="noreferrer">{item.title}</Link></h3>
              <p>{item.description}</p>
            </header>
            <div className="content">
              <Link to={item.linkUrl} target="_blank" rel="noreferrer" className="image main">{item.image}</Link>
              <Link to={item.linkUrl} target="_blank" rel="noreferrer" className="button primary">
                {item.linkLabel}
              </Link>
            </div>
          </section>
        })}

        <p className="lg:mt-40 mt-20"><strong>Visit</strong> our social media accounts for more of our works, and stay tuned for our upcoming releases!</p>

        <div className="-ml-3"><SocialMedia /></div>
      </div>
    </section>
  </Layout>
}

export default WorksPage

export const Head: HeadFC = () => <title>Celesta Productions - Works</title>
