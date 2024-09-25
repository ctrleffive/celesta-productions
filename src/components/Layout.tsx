import { type HeadFC, StaticQuery, graphql } from 'gatsby'
import React, { type PropsWithChildren } from 'react'
import { Footer } from './Footer'

export const Layout = (props: PropsWithChildren) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <div id="wrapper">
        {props.children}
        <Footer />
      </div>}
    />
  )
}

export const Head: HeadFC = () => <>
  <html lang="en" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Page Not Found</title>
</>
