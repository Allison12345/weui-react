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
    this.touchStart = e.touches[0].clientX
  }
  touchend = () => {
    if (this.dist > 0) {
      if (this.dist < 34) {
        this.setState({ index: `${-68}px` })
      } else if (34 <= this.dist && this.dist <= 68) {
        this.setState({ index: 0 })
      }
    } else if (this.dist < 0) {
      if (this.dist > -34) {
        this.setState({ index: 0 })
      } else if (-68 <= this.dist && this.dist <= -34) {
        this.setState({ index: `${-68}px` })
      }
    }
  }
  touchmove = e => {
    this.dist = e.changedTouches[0].clientX - this.touchStart
    if (this.dist < 0) {
      this.setState({ index: `${this.dist}px` })
      if (this.dist < -68) return
    } else if (this.dist > 0) {
      this.setState({ index: `${-68 + this.dist}px` })
      if (this.dist > 68) return
    }

    console.log(this.dist)
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
              style={{ transform: `translateX(${this.state.index})` }}
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
