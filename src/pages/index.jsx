import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/global.css"
import "../fonts/gotham.css"

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
      msm2020LogoDark: file(relativePath: { eq: "msm2020-logo-dark.png" }) {
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
      lm25LogoColour: file(relativePath: { eq: "lm25-logo.png" }) {
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
    <div>
      <div class="hidden md:flex mx-auto fix-aspect">
        <div class="w-1/3 group invisible animated fadeIn delay-1s">
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
                  <span class="title-shadow text-l lg:text-xl font-light text-gray-100 animated fadeIn slow">
                    His Holiness Mahant Swami Maharaj in &nbsp;
                    <br class="hidden lg:block" />
                    UK &amp; Europe 2020
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="w-1/3 group invisible animated fadeIn delay-2s">
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
                  <span class="title-shadow text-l lg:text-xl font-light text-gray-100 animated fadeIn slow">
                    25th Anniversary of &nbsp;
                    <br class="hidden lg:block" />
                    BAPS Shri Swaminarayan Mandir, London
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="w-1/3 group invisible animated fadeIn delay-3s">
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
                  <span class="title-shadow text-l lg:text-xl font-light text-gray-100 animated fadeIn slow">
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

      <div class="mobile md:hidden text-center">
        <a href="/lm25">
          <div class="flex w-11/12 h-48 mx-auto mt-2 mb-6 overflow-hidden rounded-lg bg-white animated fadeIn slow delay-1s">
            <div class="w-2/5">
              <Img
                fluid={images.lm25BackdropRaw.childImageSharp.fluid}
                alt="LM25 Backdrop Raw"
                loading="eager"
              />
            </div>
            <div class="w-3/5 my-auto">
              <div class="px-10">
                <Img
                  fluid={images.lm25LogoColour.childImageSharp.fluid}
                  alt="LM25"
                  loading="eager"
                />
              </div>
              <div class="p-3 text-xs font-light text-yellow-700">
                25th Anniversary of
                <br />
                BAPS Shri Swaminarayan Mandir, London
              </div>
            </div>
          </div>
        </a>
        <a href="/msm2020">
          <div class="flex w-11/12 h-48 mx-auto mt-2 mb-6 overflow-hidden rounded-lg bg-white animated fadeIn slow delay-2s">
            <div class="w-2/5">
              <Img
                fluid={images.msm2020BackdropRaw.childImageSharp.fluid}
                alt="MSM2020 Backdrop Raw"
                loading="eager"
              />
            </div>
            <div class="w-3/5 my-auto">
              <div class="px-5">
                <Img
                  fluid={images.msm2020LogoDark.childImageSharp.fluid}
                  alt="MSM2020"
                  loading="eager"
                />
              </div>
              <div class="pt-5 text-xs font-light text-yellow-700">
                HH Mahant Swami Maharaj in
                <br />
                UK &amp; Europe 2020
              </div>
            </div>
          </div>
        </a>
        <a href="/psm100">
          <div class="flex w-11/12 h-48 mx-auto mt-2 mb-6 overflow-hidden rounded-lg bg-white animated fadeIn slow delay-3s">
            <div class="w-2/5">
              <Img
                fluid={images.psm100BackdropRaw.childImageSharp.fluid}
                alt="PSM100 Backdrop Raw"
                loading="eager"
              />
            </div>
            <div class="w-3/5 my-auto">
              <div class="px-5">
                <Img
                  fluid={images.psm100Logo.childImageSharp.fluid}
                  alt="PSM100"
                  loading="eager"
                />
              </div>
              <div class="text-xs font-light text-yellow-700">
                Centenary Birth Anniversary of
                <br />
                HH Pramukh Swami Maharaj
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default IndexPage
