import React from 'react'

import './style.css'

import WeuiCell from '../WeuiCell'
import WeuiCells from '../WeuiCells'

const Pane = ({ label, icon, items = [], history, isShow, onClick }) => {
  const routerClick = path => {
    history.push(path)
  }
  return (
    <li className="pane">
      <div className="weui-flex" style={{ padding: '20px' }} onClick={onClick}>
        <p className="weui-flex__item">{label}</p>
        <img
          src={require(`../../assets/imgs/icon_nav_${icon}.png`)}
          alt="logo"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
      {isShow && (
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
      )}
    </li>
  )
}
export default Pane
