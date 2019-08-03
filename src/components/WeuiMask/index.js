import React from 'react'

const WeuiMask = ({ children }) => {
  return (
    <div className="weui-mask" style={{ opacity: 1 }}>
      {children}
    </div>
  )
}
export default WeuiMask
