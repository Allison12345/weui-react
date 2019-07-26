import React from 'react'

import classnames from 'classnames'
import { renderProp } from '../../utils/render'

const WeuiCell = ({ hd, bd, ft, type, onClick, isLabel, before }) => {
  return (
    <div
      className={classnames('weui-cell', {
        [`weui-cell_${type}`]: type,
        'weui-check__label': isLabel,
        'weui-cell_select-before': before
      })}
      onClick={onClick}
    >
      {hd && <div className="weui-cell__hd">{renderProp(hd)}</div>}
      {bd && <div className="weui-cell__bd">{renderProp(bd)}</div>}
      {ft && <div className="weui-cell__ft">{renderProp(ft)}</div>}
    </div>
  )
}

export default WeuiCell
