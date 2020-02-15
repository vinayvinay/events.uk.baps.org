import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const logos = useStaticQuery(graphql`
    query {
      lm25Logo: file(relativePath: { eq: "lm25-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      msm2020Logo: file(relativePath: { eq: "msm2020-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      psm100Logo: file(relativePath: { eq: "psm100-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <div></div>
      <div>
        <Img fluid={logos.msm2020Logo.childImageSharp.fluid} alt="MSM2020 Logo" />
        <Img fluid={logos.lm25Logo.childImageSharp.fluid} alt="LM25 Logo" />
        <Img fluid={logos.psm100Logo.childImageSharp.fluid} alt="PSM100 Logo" />
      </div>
    </div>
  )
}

export default IndexPage
