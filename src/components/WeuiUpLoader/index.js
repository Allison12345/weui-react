import React from 'react'

const WeuiUpLoader = () => {
  return (
    <div className="weui-uploader">
      <div className="weui-uploader__hd">
        <p className="weui-uploader__title">图片上传</p>
        <div className="weui-uploader__info">0/2</div>
      </div>
      <div className="weui-uploader__bd">
        <ul className="weui-uploader__files">
          <li className="weui-uploader__files" />
        </ul>
        <div className="weui-uploader__input-box">
          <input
            className="weui-uploader__input"
            type="file"
            accept=".jpg,.png,.jpeg,.svg,.webp"
            multiple
          />
        </div>
      </div>
    </div>
  )
}

export default WeuiUpLoader
