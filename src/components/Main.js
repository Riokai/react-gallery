require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'

let imageData = require('data/imageData.json')

function genImageURL (imageDataArr) {
  imageDataArr.forEach(item => {
    item.imageURL = require(`../images/${item.fileName}`)
  })

  return imageDataArr
}

imageData = genImageURL(imageData)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
