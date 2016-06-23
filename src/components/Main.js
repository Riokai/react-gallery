require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'

import ImgFigure from 'components/ImgFigure'

function genImageURL (imageDataArr) {
  imageDataArr.forEach(item => {
    item.imageURL = require(`../images/${item.fileName}`)
  })

  return imageDataArr
}

class AppComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  Constant: {
    centerPos: {
      left: 0,
      right: 0
    },
    horizonPositionRange: {
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    verticalPositionRange: {
      topY: [0, 0],
      x: [0, 0]
    }
  }

  // 组件加载后，为每张图片计算其位置的范围
  componentDidMount () {
    let stageDOM = React.findDOMNode(this.refs.stage)
    let stageWidth = stageDOM.scrollWidth
    let stageHeight = stageDOM.scrollHeight
    let stageWidthHalf = Math.ceil(stageWidth / 2)
    let stageHeightHalf = Math.ceil(stageHeight / 2)

    let imgFigureDOM = React.findDOMNode(this.refs.imgFigure0)
    let imgWidth = imgFigureDOM.scrollWidth
    let imgHeight = imgFigureDOM.scrollHeight
    let imgWidthHalf = Math.ceil(imgWidth / 2)
    let imgHeightHalf = Math.ceil(imgHeight / 2)

    // 计算中心点的值
    this.Constant.centerPos = {
      left: stageWidthHalf - imgWidthHalf,
      top: stageHeightHalf - imgHeightHalf
    }

    // 计算左侧和右侧的位置
    this.Constant.horizonPositionRange.leftSecX = [
      -imgWidthHalf,
      stageWidthHalf - imgWidthHalf * 3
    ]

    this.Constant.horizonPositionRange.rightSecX = [
      stageWidthHalf + imgWidthHalf,
      stageWidth - imgWidthHalf
    ]

    this.Constant.horizonPositionRange.y = [
      -imgHeightHalf,
      stageHeight - imgHeightHalf
    ]

    // 计算上侧的位置
    this.Constant.verticalPositionRange.topY = [
      -imgHeightHalf,
      stageHeightHalf - imgHeightHalf * 3
    ]

    this.Constant.verticalPositionRange.x = [
      imgWidthHalf - imgWidthHalf,
      stageWidthHalf
    ]

    this.reArrange(0)
  }
  // 重新布局所有图片
  reArrange (centerIndex) {

  }

  render () {
    let controllerUnits = []
    let imageFigures = []
    let imageData = require('data/imageData.json')

    imageData = genImageURL(imageData)

    imageData.forEach((item, index) => {
      imageFigures.push(<ImgFigure data={item} key={index} ref={`imgFigure${index}`}/>)
    })

    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imageFigures}
        </section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {}
AppComponent.propTypes = {}

export default AppComponent
