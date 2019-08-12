import React, { Component } from 'react'

import Page from '../../components/Page'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiUpLoader from '../../components/WeuiUpLoader'

class upLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: []
    }
  }
  render() {
    return (
      <Page title="upLoader" desc="上传组件,配合gallery使用 ">
        <WeuiCells type="form">
          <WeuiCell bd={() => <WeuiUpLoader />} />
        </WeuiCells>
      </Page>
    )
  }
}
export default upLoader
