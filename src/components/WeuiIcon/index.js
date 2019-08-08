import React from 'react'

import classnames from 'classnames'
import './style.css'
const WeuiIcon = ({ icon, primary, title, desc }) => {
  return (
    <div className="icon-box">
      <i
        className={classnames('weui-icon_msg', `weui-icon-${icon}`, {
          'weui-icon_msg-primary': primary
        })}
      />
      <div className="icon-box__ctn">
        <h3 className="icon-box__title">{title}</h3>
        <p className="icon-box__desc">{desc}</p>
      </div>
    </div>
  )
}
export default WeuiIcon
