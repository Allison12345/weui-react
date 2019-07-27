import React, { Fragment } from 'react'

import classnames from 'classnames'

const WeuiBadge = ({ dot, number, label, style }) => {
  return (
    <Fragment>
      {label && <span>{label}</span>}
      <span
        style={style}
        className={classnames('weui-badge', { 'weui-badge_dot': dot })}
      >
        {number}
      </span>
    </Fragment>
  )
}
export default WeuiBadge
