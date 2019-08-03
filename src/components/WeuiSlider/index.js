import React, { Component } from 'react'

class WeuiSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 50
    }
  }
  touchstart = e => {
    this.currentIndex = this.state.index
    this.startX = e.touches[0].clientX
  }
  touchmove = e => {
    const dist = e.touches[0].clientX - this.startX
    const index = parseInt(
      this.currentIndex + (dist / this.refs.inner.clientWidth) * 100,
      10
    )
    if (0 < index && index <= 100)
      this.setState({
        index
      })
  }
  touchend = e => {}
  render() {
    return (
      <div className="weui-slider-box">
        <div className="weui-slider">
          <div className="weui-slider__inner" ref="inner">
            <div
              className="weui-slider__track"
              style={{ width: `${this.state.index}%` }}
            />
            <div
              onTouchStart={this.touchstart}
              onTouchMove={this.touchmove}
              onTouchEnd={this.touchend}
              className="weui-slider__handler"
              style={{ left: `${this.state.index}%` }}
            />
          </div>
        </div>
        <div className="weui-slider-box__value">{this.state.index}</div>
      </div>
    )
  }
}
export default WeuiSlider
