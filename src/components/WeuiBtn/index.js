import React from 'react'

import classnames from 'classnames'

const WeuiBtn = ({
  type,
  primary,
  btnDefault,
  warn,
  isLoading,
  loadingLabel,
  label
}) => {
  return (
    <button
      className={classnames('weui-btn', `weui-btn_${type}`, {
        'weui-btn_primary': primary,
        'weui-btn_default': btnDefault,
        'weui-btn_warn': warn
      })}
    >
      {label}
      {isLoading && <i className="weui-loading">{loadingLabel}</i>}
    </button>
  )
}
export default WeuiBtn
