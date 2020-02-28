import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle, menuLinks }) => {
  const logos = useStaticQuery(graphql`
    query {
      msm2020Logo: file(relativePath: { eq: "msm2020-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 60) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lm25Logo: file(relativePath: { eq: "lm25-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 60) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      psm100Logo: file(relativePath: { eq: "psm100-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 60) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div class="w-full">
      <div class="container flex flex-wrap items-center">
        <div class="w-1/6 pr-6 flex border-b border-gray-200">
          <div class="w-1/3 mt-2 mb-2 border-2 border-blue-100 rounded-lg">
            <Img
              fluid={logos.msm2020Logo.childImageSharp.fluid}
              alt="MSM2020"
            />
          </div>
          <div class="w-1/3 mt-2 mb-2 border-2 border-blue-100 rounded-lg">
            <Img fluid={logos.lm25Logo.childImageSharp.fluid} alt="LM25" />
          </div>
          <div class="w-1/3 mt-2 mb-2 border-2 border-blue-100 rounded-lg">
            <Img fluid={logos.psm100Logo.childImageSharp.fluid} alt="PSM100" />
          </div>
        </div>

        <label
          for="menu-toggle"
          class="pointer-cursor lg:hidden block border-b border-gray-200 p-5"
        >
          <svg
            class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden lg:flex lg:items-center lg:w-auto w-full mt-2"
          id="menu"
        >
          <nav>
            <ul class="lg:flex items-center justify-between text-base text-gray-700">
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/about">
                  About
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a
                  class="block lg:px-2 lg:py-4"
                  href="/lm25/festival-of-harmony"
                >
                  Festival of Harmony
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a
                  class="block lg:px-2 lg:py-4"
                  href="/lm25/finale-celebrations"
                >
                  Finale Celebrations
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/gift-shop">
                  Gift Shop
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/updates">
                  Updates
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/news-media">
                  News &amp; Media
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/faqs">
                  FAQs
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/support-us">
                  Support Us
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:px-2 lg:py-4" href="/lm25/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
