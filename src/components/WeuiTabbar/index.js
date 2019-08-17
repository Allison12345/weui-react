import React from 'react'

import classnames from 'classnames'
const WeuiTabbar = ({ items, onclick, index }) => {
  return (
    <div className="weui-tabbar">
      {items.map((item, key) => (
        <div
          key={key}
          className={classnames('weui-tabbar__item', {
            'weui-bar__item_on': key === index
          })}
          onClick={() => onclick(key)}
        >
          <span style={{ display: 'inline-block', position: 'relative' }}>
            <img
              className="weui-tabbar__icon"
              src={require('../../assets/imgs/icon_tabbar.png')}
              alt="img"
            />
            {item.number && (
              <span
                className="weui-badge"
                style={{ position: 'absolute', top: '-2px', right: ' -13px' }}
              >
                {item.number}
              </span>
            )}
          </span>
          <p className="weui-tabbar__label">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
export default WeuiTabbar
