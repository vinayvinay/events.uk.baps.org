import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/global.css"

const IndexPage = () => {
  const logos = useStaticQuery(graphql`
    query {
      neasdenTemple: file(relativePath: { eq: "neasden-temple.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lm25Logo: file(relativePath: { eq: "lm25-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      msm2020Logo: file(relativePath: { eq: "msm2020-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      psm100Logo: file(relativePath: { eq: "psm100-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div class="bg-white h-full">
      <Img fluid={logos.neasdenTemple.childImageSharp.fluid} alt="Neasden Temple" />
      <div class="w-full p-3 bg-gray-700 font-bold text-xl mb-2 text-white text-center">Events at Neasden Temple</div>
      <div class="p-3">
        <div class="md:flex w-full text-xs">
          <div class="md:flex-1 md:flex-shrink-0 mx-12 my-6 px-6 py-3 rounded-md shadow-lg box-border border-2 hover:border-blue-200">
            <Img fluid={logos.msm2020Logo.childImageSharp.fluid} alt="MSM2020" />
          </div>
          <div class="md:flex-1 md:flex-shrink-0 mx-12 my-6 px-6 py-3 rounded-md shadow-lg box-border border-2 hover:border-blue-200">
            <Img fluid={logos.lm25Logo.childImageSharp.fluid} alt="LM25" />
          </div>
          <div class="md:flex-1 md:flex-shrink-0 mx-12 my-6 px-6 py-3 rounded-md shadow-lg box-border border-2 hover:border-blue-200">
            <Img fluid={logos.psm100Logo.childImageSharp.fluid} alt="PSM100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
