require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'

import ImgFigure from 'components/ImgFigureComponent'



function genImageURL (imageDataArr) {
  imageDataArr.forEach(item => {
    item.imageURL = require(`../images/${item.fileName}`)
  })

  return imageDataArr
}

class AppComponent extends React.Component {
  render() {
    let controllerUnits = []
    let imageFigures = []
    let imageData = require('data/imageData.json')

    imageData = genImageURL(imageData)

    imageData.forEach((item, index) => {
      imageFigures.push(<ImgFigure data={item} key={index}/>)
    })

    return (
      <section className="stage">
        <section className="img-sec">
          {imageFigures}
        </section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
