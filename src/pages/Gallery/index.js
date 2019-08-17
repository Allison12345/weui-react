import React, { Component } from 'react'

import Page from '../../components/Page'
import WeuiGallery from '../../components/weuiGallery'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      imgs: Array(9)
        .fill(0)
        .map((img, index) => require(`../../assets/imgs/IMG_${index}.png`))
    }
  }
  indexChange = currentIndex => {
    if (currentIndex > 0 && currentIndex < this.state.imgs.length - 1) {
      this.setState({ currentIndex })
    }
  }
  render() {
    return (
      <Page>
        <WeuiGallery
          img={this.state.imgs[this.state.currentIndex]}
          indexChange={this.indexChange}
          currentIndex={this.state.currentIndex}
        />
      </Page>
    )
  }
}
export default Gallery
