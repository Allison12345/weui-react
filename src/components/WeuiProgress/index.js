import React, { Component, Fragment } from 'react'

import WeuiBtn from '../../components/WeuiBtn'

class WeuiProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      show: true
    }
  }
  oncancel = () => {
    this.setState({ show: false })
  }
  onprogress = () => {
    if (this.state.index === 100) return
    const index = this.state.index + 1
    this.setState({ index: index })
    setTimeout(this.onprogress, 10)
  }

  render() {
    return (
      <Fragment>
        {this.state.show && (
          <div className="weui-progress">
            <div className="weui-progress__bar">
              <div
                className="weui-progress__inner-bar"
                style={{ width: `${this.state.index}%` }}
              />
            </div>
            <div className="weui-progress__opr" onClick={this.oncancel}>
              <i className="weui-icon-cancel" />
            </div>
          </div>
        )}
        <WeuiBtn type="primary" label="上传" onClick={this.onprogress} />
      </Fragment>
    )
  }
}
export default WeuiProgress
