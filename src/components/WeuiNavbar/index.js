import React from 'react'

import classnames from 'classnames'

const WeuiNavbar = ({ items, onClick, index }) => {
  return (
    <div className="weui-navbar">
      {items.map((item, key) => (
        <div
          key={key}
          className={classnames('weui-navbar__item', {
            'weui-bar__item_on': index === key
          })}
          onClick={() => onClick(key)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
export default WeuiNavbar
