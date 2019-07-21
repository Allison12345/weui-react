import React from 'react'

import classnames from 'classnames'

const WeuiCell = ({ label, access, onClick }) => {
  return (
    <div
      className={classnames('weui-cell', { 'weui-cell_access': access })}
      onClick={onClick}
    >
      <div className="weui-cell__bd">
        <p>{label}</p>
      </div>
      <div className="weui-cell_ft" />
    </div>
  )
}

export default WeuiCell
