import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle, menuLinks }) => {
  const logos = useStaticQuery(graphql`
    query {
      lm25Logo: file(relativePath: { eq: "lm25-logo.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div class="w-full">
      <div class="container flex flex-wrap items-center">
        <div class="flex-1 flex px-3 justify-between items-center border-b border-gray-200">
          <Img fixed={logos.lm25Logo.childImageSharp.fixed} alt="LM25" />
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
          class="hidden lg:flex lg:items-center lg:w-auto w-full mt-1"
          id="menu"
        >
          <nav>
            <ul class="lg:flex items-center justify-between text-base text-gray-700">
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/about">
                  About
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/festival-of-harmony">
                  Festival of Harmony
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/finale-celebrations">
                  Finale Celebrations
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/gift-shop">
                  Gift Shop
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/updates">
                  Updates
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/news-media">
                  News &amp; Media
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/faqs">
                  FAQs
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/support-us">
                  Support Us
                </a>
              </li>
              <li class="lg:p-0 p-3 border-b border-gray-200 hover:text-gray-900 hover:border-red-700">
                <a class="block lg:p-4" href="/lm25/contact-us">
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
