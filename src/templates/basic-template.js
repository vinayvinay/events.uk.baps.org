import React from "react"

import "../css/global.css"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent } = pageContext

  return pageContent.map((data, index) => {
    return (
      <div class="container p-3">
        <div class="text-3xl">{data.title}</div>
        <div>{data.introduction}</div>
      </div>
    )
  })
}

export default basicTemplate
