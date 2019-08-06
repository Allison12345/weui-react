import React from 'react'

import WeuiMask from '../WeuiMask'

const WeuiHalfScreenDialog = () => {
  return (
    <WeuiMask>
      <div className="weui-half-screen-dialog">
        <div className="weui-half-screen-dialog__hd">
          <div className="weui-half-screen-dialog__hd__side">
            <button className="weui-icon-btn weui-icon-btn_close">关闭</button>
          </div>
          <div className="weui-half-screen-dialog__hd__main">
            <strong className="weui-half-screen-dialog__title">标题</strong>
          </div>
        </div>
        <div className="weui-half-screen-dialog__bd">
          <div className="weui-half-screen-dialog__desc" />
          <div className="weui-half-screen-dialog__tips" />
        </div>
        <div className="weui-half-screen-dialog__ft">
          <div className="weui-dialog__btn weui-dialog__btn_default">
            辅助操作
          </div>
          <div className="weui-dialog__btn weui-dialog__btn_primary">
            主操作
          </div>
        </div>
      </div>
    </WeuiMask>
  )
}
export default WeuiHalfScreenDialog
