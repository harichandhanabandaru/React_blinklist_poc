import React from 'react'
import Template from '../../template/Template'

function EntrepreneurshipPage() {

  sessionStorage.setItem("libraryTab","enterpreneurship");

  return (
    <Template page={"entrepreneurship"}/>
  )
}

export default EntrepreneurshipPage