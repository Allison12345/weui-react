import React from 'react'

import classnames from 'classnames'

const WeuiBtn = ({
  type,
  primary,
  btnDefault,
  warn,
  loading,
  isLoading,
  label,
  cellType,
  plainDis,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        'weui-btn',
        `weui-btn_${type}`,
        `weui-btn_cell-${cellType}`,
        {
          'weui-btn_primary': primary,
          'weui-btn_default': btnDefault,
          'weui-btn_warn': warn,
          'weui-btn_loading': loading,
          'weui-btn_plain-disabled': plainDis
        }
      )}
    >
      {isLoading && <i className="weui-loading" />}
      {label}
    </button>
  )
}
export default WeuiBtn
