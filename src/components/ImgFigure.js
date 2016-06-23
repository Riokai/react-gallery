'use strict'

import React from 'react'

require('styles/ImgFigure.scss')

class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img
          src={this.props.data.imageURL}
          alt={this.props.data.title} />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

ImgFigure.displayName = 'ImgFigure'

// Uncomment properties you need
ImgFigure.propTypes = {
  data: React.PropTypes.object.isRequired
}
// ImgFigure.defaultProps = {}

export default ImgFigure
