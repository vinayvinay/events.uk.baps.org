import React from "react"

import "../css/global.css"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent } = pageContext

  return (
    <div class="bg-white h-full">
      {pageContent.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </div>
  )
}

export default basicTemplate
