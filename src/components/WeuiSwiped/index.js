import React, { Component } from 'react'

import WeuiCell from '../../components/WeuiCell'

class WeuiSwiped extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  touchstart = e => {
    this.touchStart = e.touches[0].clientX
  }
  touchend = () => {}
  touchmove = e => {
    const dist = e.changedTouches[0].clientX - this.touchStart
    console.log(dist)
    this.setState({ index: `${dist}px` })
  }
  render() {
    return (
      <div
        className="weui-cell weui-cell_swiped"
        style={{ transform: `translateX(${this.state.index})` }}
        onTouchStart={this.touchstart}
        onTouchEnd={this.touchend}
        onTouchMove={this.touchmove}
      >
        <WeuiCell bd="标题文字" ft="说明文字" />
        <div className="weui-cell__ft">
          <div className="weui-swiped-btn weui-swiped-btn_warn">删除</div>
        </div>
      </div>
    )
  }
}
export default WeuiSwiped
