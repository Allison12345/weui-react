import React from 'react'

const WeuiGrid = () => {
  return (
    <div className="weui-grids">
      {Array(9)
        .fill(0)
        .map((item, index) => (
          <div className="weui-grid" key={index}>
            <div className="weui-grid__icon">
              <img
                src={require('../../assets/imgs/icon_tabbar.png')}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <p className="weui-grid__label"> Grid</p>
          </div>
        ))}
    </div>
  )
}
export default WeuiGrid
