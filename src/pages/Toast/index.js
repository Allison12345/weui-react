import React, { Component } from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'
import WeuiToast from '../../components/WeuiToast'
import WeuiLoadingToast from '../../components/WeuiLoadingToast'

class Toast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toast: false,
      loadingShow: false
    }
  }
  onclick1 = () => {
    this.setState({ toast: true })
    setTimeout(() => this.setState({ toast: false }), 2000)
  }
  onclick2 = () => {
    this.setState({ loadingShow: true })
    setTimeout(() => this.setState({ loadingShow: false }), 2000)
  }
  render() {
    return (
      <Page title="Toast" desc="弹出式提示">
        <WeuiBtn type="default" label="成功提示" onClick={this.onclick1} />
        <WeuiBtn type="default" label="加载中提示" onClick={this.onclick2} />
        {this.state.toast && <WeuiToast />}
        {this.state.loadingShow && <WeuiLoadingToast />}
      </Page>
    )
  }
}
export default Toast
