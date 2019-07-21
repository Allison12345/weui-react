import React, { Fragment } from 'react'

import classnames from 'classnames'

const WeuiCells = ({ title, form, tips, children }) => {
  return (
    <Fragment>
      {title && <div className="weui-cells__title">{title}</div>}
      <div className={classnames('weui-cells', { 'weui-cells_form': form })}>
        {children}
      </div>
      {tips && <div className="weui-cells__tips">{tips}</div>}
    </Fragment>
  )
}
export default WeuiCells
