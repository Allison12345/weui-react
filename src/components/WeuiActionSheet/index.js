import React from 'react'

import WeuiMask from '../WeuiMask'

const WeuiActionSheet = ({ items, hide, onComfrim }) => {
  return (
    <WeuiMask>
      <div className="weui-actionsheet weui-actionsheet_toggle">
        <div className="weui-actionsheet__title">
          <p className="weui-actionsheet__title-text">标题</p>
        </div>
        <div className="weui-actionsheet__menu">
          {items.map((item, index) => (
            <div
              className="weui-actionsheet__cell"
              key={index}
              onClick={() => {
                onComfrim(item)
                hide()
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="weui-actionsheet__action" onClick={hide}>
          <div className="weui-actionsheet__cell">取消</div>
        </div>
      </div>
    </WeuiMask>
  )
}
export default WeuiActionSheet
