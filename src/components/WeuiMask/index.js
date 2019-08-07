import React from 'react'

const WeuiMask = ({ children, onClick }) => {
  return (
    <div className="weui-mask" style={{ opacity: 1 }} onClick={onClick}>
      {children}
    </div>
  )
}
export default WeuiMask
