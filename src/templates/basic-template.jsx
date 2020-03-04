import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"

import "../css/global.css"
import "../fonts/gotham.css"

const BasicTemplate = (queryResult) => {
  return (
    <div>
      <Header />
      <div class="container p-3">
        <div class="text-3xl">{queryResult.data.yaml.content.title}</div>
        <div>{queryResult.data.yaml.content.introduction}</div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    yaml(slug: { eq: $slug }) {
      content {
        title
        introduction
      }
    }
  }
`
export default BasicTemplate
