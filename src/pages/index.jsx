import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/global.css"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      msm2020Logo: file(relativePath: { eq: "msm2020-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25Logo: file(relativePath: { eq: "lm25-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100Logo: file(relativePath: { eq: "psm100-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      msm2020Backdrop: file(relativePath: { eq: "msm2020-backdrop.jpg" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#f4a261", shadow: "#264653" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25Backdrop: file(relativePath: { eq: "lm25-backdrop.jpg" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#f4a261", shadow: "#264653" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100Backdrop: file(relativePath: { eq: "psm100-backdrop.jpg" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#f4a261", shadow: "#264653" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      msm2020BackdropRaw: file(relativePath: { eq: "msm2020-backdrop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25BackdropRaw: file(relativePath: { eq: "lm25-backdrop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100BackdropRaw: file(relativePath: { eq: "psm100-backdrop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div class="flex overflow-hidden">
      <div class="invisible animated fadeInDownBig faster group relative w-1/3">
        <div class="delay-1s group-hover:hidden">
          <Img
            fluid={images.msm2020Backdrop.childImageSharp.fluid}
            alt="MSM2020 Backdrop"
          />
          <div class="absolute bottom-0 inset-x-0 mb-16 p-3 text-center text-6xl font-black text-white animated fadeIn fast">
            MSM2020
          </div>
        </div>
        <div class="hidden group-hover:block landing-thirds">
          <a href="/msm2020">
            <Img
              fluid={images.msm2020BackdropRaw.childImageSharp.fluid}
              alt="MSM2020 Backdrop Raw"
            />
            <div class="absolute bottom-0 inset-x-0 mx-32 mb-16 p-3 rounded-md bg-white border-2 border-blue-300 animated fadeInUpBig faster">
              <Img
                fluid={images.msm2020Logo.childImageSharp.fluid}
                alt="MSM2020"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="invisible animated fadeInDownBig faster delay-1s group relative w-1/3">
        <div class="delay-2s group-hover:hidden">
          <Img
            fluid={images.lm25Backdrop.childImageSharp.fluid}
            alt="LM25 Backdrop"
          />
          <div class="absolute bottom-0 inset-x-0 mb-16 p-3 text-center text-6xl font-black text-white animated fadeIn fast">
            LM25
          </div>
        </div>
        <div class="hidden group-hover:block landing-thirds">
          <a href="/lm25">
            <Img
              fluid={images.lm25BackdropRaw.childImageSharp.fluid}
              alt="LM25 Backdrop Raw"
            />
            <div class="absolute bottom-0 inset-x-0 mx-32 mb-16 p-3 rounded-md bg-white border-2 border-blue-300 animated fadeInUpBig faster">
              <Img fluid={images.lm25Logo.childImageSharp.fluid} alt="LM25" />
            </div>
          </a>
        </div>
      </div>
      <div class="invisible animated fadeInDownBig faster delay-2s group relative w-1/3">
        <div class="delay-3s group-hover:hidden">
          <Img
            fluid={images.psm100Backdrop.childImageSharp.fluid}
            alt="PSM100 Backdrop"
          />
          <div class="absolute bottom-0 inset-x-0 mb-16 p-3 text-center text-6xl font-black text-white animated fadeIn fast">
            PSM100
          </div>
        </div>
        <div class="hidden group-hover:block landing-thirds">
          <a href="/psm100">
            <Img
              fluid={images.psm100BackdropRaw.childImageSharp.fluid}
              alt="PSM100 Backdrop Raw"
            />
            <div class="absolute bottom-0 inset-x-0 mx-32 mb-16 p-3 rounded-md bg-white border-2 border-blue-300 animated fadeInUpBig faster">
              <Img
                fluid={images.psm100Logo.childImageSharp.fluid}
                alt="PSM100"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
