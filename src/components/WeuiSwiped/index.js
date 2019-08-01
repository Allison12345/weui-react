import React, { Component, Fragment } from 'react'

import WeuiCell from '../../components/WeuiCell'

class WeuiSwiped extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isshown: true
    }
  }
  touchstart = e => {
    this.startIndex = this.state.index
    this.touchStart = e.touches[0].clientX
  }
  touchend = () => {
    if (this.state.index > -34) {
      this.setState({ index: 0 })
    } else if (-68 <= this.state.index && this.state.index <= -34) {
      this.setState({ index: -68 })
    }
  }
  touchmove = e => {
    const dist = e.changedTouches[0].clientX - this.touchStart
    const currentIndex = this.startIndex + dist
    if (-68 <= currentIndex && currentIndex <= 0) {
      this.setState({ index: currentIndex })
    }
    console.log(currentIndex)
  }
  render() {
    return (
      <Fragment>
        {this.state.isshown && (
          <div
            className="weui-cell weui-cell_swiped"
            onTouchStart={this.touchstart}
            onTouchEnd={this.touchend}
            onTouchMove={this.touchmove}
          >
            <div
              className="weui-cell__bd"
              style={{ transform: `translateX(${this.state.index}px)` }}
            >
              <WeuiCell bd="标题文字" ft="说明文字" />
            </div>
            <div
              className="weui-cell__ft"
              onClick={() => this.setState({ isshown: false })}
            >
              <div className="weui-swiped-btn weui-swiped-btn_warn">删除</div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}
export default WeuiSwiped
