import React from 'react'

import classnames from 'classnames'
import { renderProp } from '../../utils/render'

const WeuiCell = ({
  hd,
  bd,
  ft,
  type,
  onClick,
  isLabel,
  before,
  hdStyle,
  Link,
  example
}) => {
  return (
    <div
      className={classnames('weui-cell', {
        [`weui-cell_${type}`]: type,
        'weui-check__label': isLabel,
        'weui-cell_select-before': before,
        'weui-cell_link': Link,
        'weui-cell_example': example
      })}
      onClick={onClick}
    >
      {hd && (
        <div className="weui-cell__hd" style={hdStyle}>
          {renderProp(hd)}
        </div>
      )}
      {bd && <div className="weui-cell__bd">{renderProp(bd)}</div>}
      {ft && <div className="weui-cell__ft">{renderProp(ft)}</div>}
    </div>
  )
}

export default WeuiCell
