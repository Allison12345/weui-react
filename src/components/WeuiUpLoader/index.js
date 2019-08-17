import React from 'react'

const WeuiUpLoader = ({ max, imgs, onFile }) => {
  const getImg = e => {
    onFile(e.target.files)
  }
  return (
    <div className="weui-uploader">
      <div className="weui-uploader__hd">
        <p className="weui-uploader__title">图片上传</p>
        <div className="weui-uploader__info">
          {imgs.length} / {max}
        </div>
      </div>
      <div className="weui-uploader__bd">
        <ul className="weui-uploader__files">
          {imgs.map((img, index) => (
            <li
              className="weui-uploader__file"
              key={index}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </ul>
        <div className="weui-uploader__input-box">
          <input
            className="weui-uploader__input"
            type="file"
            onChange={getImg}
            accept=".jpg,.png,.jpeg,.svg,.webp"
            multiple
          />
        </div>
      </div>
    </div>
  )
}

export default WeuiUpLoader
