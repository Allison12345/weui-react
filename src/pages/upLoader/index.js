import React, { Component } from 'react'

import Page from '../../components/Page'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiUpLoader from '../../components/WeuiUpLoader'
import { alert } from '../../utils/dialog'

class upLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: [],
      max: 9,
      activeIndex: -1
    }
  }
  onFile = fileList => {
    if (fileList.length + this.state.imgs.length > this.state.max) {
      alert(`最多选择${this.state.max}张`)
      return
    }
    let savedCount = 0
    const currentImgs = [...this.state.imgs]
    const onFileLoad = event => {
      currentImgs.push(event.target.result)
      savedCount++
      if (savedCount === fileList.length) {
        this.setState({ imgs: currentImgs })
      }
    }
    for (let i = 0; i < fileList.length; i++) {
      const reader = new FileReader()
      reader.readAsDataURL(fileList[i])
      reader.onload = onFileLoad
    }
  }
  render() {
    return (
      <Page title="upLoader" desc="上传组件,配合gallery使用 ">
        <WeuiCells type="form">
          <WeuiCell
            bd={() => (
              <WeuiUpLoader
                onFile={this.onFile}
                imgs={this.state.imgs}
                max={this.state.max}
              />
            )}
          />
        </WeuiCells>
      </Page>
    )
  }
}
export default upLoader
