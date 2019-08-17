import React, { useState } from 'react'

const WeuiGallery = ({ img, indexChange, currentIndex }) => {
  const [startX, setStartX] = useState(0)
  const [dis, setDis] = useState(0)
  const touchstart = e => {
    setStartX(e.changedTouches[0].clientX)
  }
  const touchmove = e => {
    setDis(e.changedTouches[0].clientX - startX)
    console.log(dis)
  }
  const touchend = e => {
    setDis(0)
    const dist = e.changedTouches[0].clientX - startX
    if (dist > 5) {
      indexChange(currentIndex - 1)
    } else if (dist < -5) {
      indexChange(currentIndex + 1)
    }
  }
  return (
    <div className="weui-gallery" style={{ display: 'block' }}>
      <span
        className="weui-gallery__img"
        style={{
          backgroundImage: `url(${img})`,
          transform: `translateX(${dis}px)`
        }}
        onTouchStart={touchstart}
        onTouchMove={touchmove}
        onTouchEnd={touchend}
      />
      <div className="weui-gallery__opr">
        <div className="weui-gallery__del">
          <i className="weui-icon-delete weui-icon_gallery-delete" />
        </div>
      </div>
    </div>
  )
}
export default WeuiGallery
