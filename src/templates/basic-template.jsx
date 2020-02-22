import React from "react"

import Header from "../components/header"
import "../css/global.css"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent } = pageContext

  return (
    <div>
      <Header />
      <div class="container p-3">
        <div class="text-3xl">{pageContent.title}</div>
        <div>{pageContent.introduction}</div>
      </div>
    </div>
  )
}

export default basicTemplate
