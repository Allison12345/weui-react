import React from 'react'

import WeuiMask from '../WeuiMask'

const WeuiHalfScreenDialog = ({
  title,
  content,
  tips,
  onCancel,
  onComfirm
}) => {
  return (
    <WeuiMask>
      <div className="weui-half-screen-dialog">
        <div className="weui-half-screen-dialog__hd">
          <div className="weui-half-screen-dialog__hd__side">
            <button className="weui-icon-btn weui-icon-btn_goback">返回</button>
            <button
              className="weui-icon-btn weui-icon-btn_close"
              onClick={onCancel}
            >
              关闭
            </button>
          </div>
          <div className="weui-half-screen-dialog__hd__main">
            <strong className="weui-half-screen-dialog__title">{title}</strong>
            <span className="weui-half-screen-dialog__subtitle">{title}</span>
          </div>
          <div className="weui-half-screen-dialog__hd__side">
            <button className="weui-icon-btn weui-icon-btn_more">更多</button>
          </div>
        </div>
        <div className="weui-half-screen-dialog__bd">
          <div className="weui-half-screen-dialog__desc">{content}</div>
          {tips && <div className="weui-half-screen-dialog__tips">{tips}</div>}
        </div>
        <div className="weui-half-screen-dialog__ft">
          <div className="weui-btn weui-btn_default" onClick={onCancel}>
            辅助操作
          </div>
          <div className="weui-btn weui-btn_primary" onClick={onComfirm}>
            主操作
          </div>
        </div>
      </div>
    </WeuiMask>
  )
}
export default WeuiHalfScreenDialog
