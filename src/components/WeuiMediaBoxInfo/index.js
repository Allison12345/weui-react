import React from 'react'

const WeuiMediaBoxInfo = ({ source, time, info }) => {
  return (
    <div className="weui-media-box__info">
      <li className="weui-media-box__info__meta">{source}</li>
      <li className="weui-media-box__info__meta">{time}</li>
      <li className="weui-media-box__info__meta weui-media-box__info__meta_extra">
        {info}
      </li>
    </div>
  )
}
export default WeuiMediaBoxInfo
