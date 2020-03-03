import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/global.css"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      msm2020Logo: file(relativePath: { eq: "msm2020-logo-monochrome.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25Logo: file(relativePath: { eq: "lm25-logo-monochrome.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100Logo: file(relativePath: { eq: "psm100-logo.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      msm2020Backdrop: file(relativePath: { eq: "msm2020-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 60, duotone: { highlight: "#f4a261", shadow: "#333333" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25Backdrop: file(relativePath: { eq: "lm25-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 60, duotone: { highlight: "#f4a261", shadow: "#333333" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100Backdrop: file(relativePath: { eq: "psm100-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 60, duotone: { highlight: "#f4a261", shadow: "#333333" }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      msm2020BackdropRaw: file(relativePath: { eq: "msm2020-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25BackdropRaw: file(relativePath: { eq: "lm25-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100BackdropRaw: file(relativePath: { eq: "psm100-backdrop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div class="flex mx-auto fix-aspect">
      <div class="w-1/3 group invisible animated fadeInDownBig delay-1s faster">
        <div class="group-hover:hidden relative">
          <Img
            fluid={images.msm2020Backdrop.childImageSharp.fluid}
            alt="MSM2020 Backdrop"
            loading="eager"
          />
          <div class="w-3/4 mx-auto pb-10 absolute bottom-0 inset-x-0 animated fadeIn fast">
            <Img
              fluid={images.msm2020Logo.childImageSharp.fluid}
              alt="MSM2020"
              loading="eager"
            />
          </div>
        </div>
        <div class="hidden group-hover:block overflow-hidden relative">
          <div class="zoom-on-hover">
            <a href="/msm2020">
              <Img
                fluid={images.msm2020BackdropRaw.childImageSharp.fluid}
                alt="MSM2020 Backdrop Raw"
                loading="eager"
              />
              <div class="w-full mx-auto pb-12 text-center absolute bottom-0 inset-x-0">
                <span class="title-shadow text-xl lg:text-2xl font-light text-gray-100 animated fadeIn slow">
                  His Holiness Mahant Swami Maharaj in &nbsp;
                  <br class="hidden lg:block" />
                  UK &amp; Europe 2020
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-1/3 group invisible animated fadeInDownBig delay-2s faster">
        <div class="group-hover:hidden relative">
          <Img
            fluid={images.lm25Backdrop.childImageSharp.fluid}
            alt="LM25 Backdrop"
            loading="eager"
          />
          <div class="w-1/2 mx-auto pb-8 absolute bottom-0 inset-x-0 animated fadeIn fast">
            <Img
              fluid={images.lm25Logo.childImageSharp.fluid}
              alt="LM25"
              loading="eager"
            />
          </div>
        </div>
        <div class="hidden group-hover:block overflow-hidden relative">
          <div class="zoom-on-hover">
            <a href="/lm25">
              <Img
                fluid={images.lm25BackdropRaw.childImageSharp.fluid}
                alt="LM25 Backdrop Raw"
                loading="eager"
              />
              <div class="w-full mx-auto pb-12 text-center absolute bottom-0 inset-x-0">
                <span class="title-shadow text-xl lg:text-2xl font-light text-gray-100 animated fadeIn slow">
                  25th Anniversary of &nbsp;
                  <br class="hidden lg:block" />
                  BAPS Shri Swaminarayan Mandir, London
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-1/3 group invisible animated fadeInDownBig delay-3s faster">
        <div class="group-hover:hidden relative">
          <Img
            fluid={images.psm100Backdrop.childImageSharp.fluid}
            alt="PSM100 Backdrop"
            loading="eager"
          />
          <div class="w-1/2 mx-auto pb-8 absolute bottom-0 inset-x-0 animated fadeIn fast">
            <Img
              fluid={images.psm100Logo.childImageSharp.fluid}
              alt="PSM100"
              loading="eager"
            />
          </div>
        </div>
        <div class="hidden group-hover:block overflow-hidden relative">
          <div class="zoom-on-hover">
            <a href="/psm100">
              <Img
                fluid={images.psm100BackdropRaw.childImageSharp.fluid}
                alt="PSM100 Backdrop Raw"
                loading="eager"
              />
              <div class="w-full mx-auto pb-12 text-center absolute bottom-0 inset-x-0">
                <span class="title-shadow text-xl lg:text-2xl font-light text-gray-100 animated fadeIn slow">
                  Centenary Birth Anniversary of &nbsp;
                  <br class="hidden lg:block" />
                  His Holiness Pramukh Swami Maharaj
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
