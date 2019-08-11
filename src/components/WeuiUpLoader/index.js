import React, { Component } from 'react'
import { url } from 'inspector'

class WeuiUpLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="weui-gallery">
        <span
          className="weui-gallery__img"
          style={{ backgroundImage: url() }}
        />
      </div>
    )
  }
}
export default WeuiUpLoader
