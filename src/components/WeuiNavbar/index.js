import React from 'react'

import classnames from 'classnames'

const WeuiNavbar = ({ items, onClick }) => {
  return (
    <div className="weui-navbar">
      {items.map((item, index) => (
        <div
          key={index}
          className={classnames('weui-navbar__item', {
            'weui-bar__item_on': index === item.key
          })}
          onClick={onClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
export default WeuiNavbar
