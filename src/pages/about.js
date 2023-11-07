import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Bio = ({ data }) => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/bitmoji.png"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
    </div>
  )
}

const AboutMe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Me" />
      <Bio data={data} />
      <div>
        <p>
          Hello, I'm Ivan. A software engineer & founder based in San Francisco
          🌉
        </p>
        <p>
          I'm currently building <a href="https://cerebralvalley.ai">Cerebral Valley</a>.
        </p>
      </div>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
