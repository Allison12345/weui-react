import React from 'react'

import WeuiCell from '../WeuiCell'
import WeuiCells from '../WeuiCells'

const Pane = ({ label, icon, items = [], history }) => {
  const routerClick = path => {
    history.push(path)
  }
  return (
    <li>
      <div className="weui-flex">
        <p className="weui-flex__item">{label}</p>
        <img
          src={require(`../../assets/imgs/icon_nav_${icon}.png`)}
          alt="logo"
        />
      </div>
      <div className="page__category">
        <WeuiCells>
          {items.map((item, index) => (
            <WeuiCell
              {...item}
              key={index}
              bd={item.label}
              ft
              type="access"
              onClick={() => routerClick(item.path)}
            />
          ))}
        </WeuiCells>
      </div>
    </li>
  )
}
export default Pane
