import React, { Fragment } from 'react'

import classnames from 'classnames'

const WeuiCells = ({ title, type, tips, children }) => {
  return (
    <Fragment>
      {title && <div className="weui-cells__title">{title}</div>}
      {children && (
        <div
          className={classnames('weui-cells', {
            [`weui-cells_${type}`]: type
          })}
        >
          {children}
        </div>
      )}
      {tips && <div className="weui-cells__tips">{tips}</div>}
    </Fragment>
  )
}
export default WeuiCells
