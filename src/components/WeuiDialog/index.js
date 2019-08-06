import React from 'react'

import WeuiMask from '../WeuiMask'
import { renderProp } from '../../utils/render'

const WeuiDialog = ({ title, content, onCancel, onComfirm }) => {
  return (
    <WeuiMask>
      <div className="weui-dialog">
        {title && (
          <div className="weui-dialog__hd">
            <strong className="weui-dialog__title">{title}</strong>
          </div>
        )}
        <div className="weui-dialog__bd">{renderProp(content)}</div>
        <div className="weui-dialog__ft">
          {onCancel && (
            <div
              className="weui-dialog__btn weui-dialog__btn_default"
              onClick={onCancel}
            >
              取消
            </div>
          )}
          <div
            className="weui-dialog__btn weui-dialog__btn_primary"
            onClick={onComfirm}
          >
            确认
          </div>
        </div>
      </div>
    </WeuiMask>
  )
}
export default WeuiDialog
