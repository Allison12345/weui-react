import React from 'react'

import WeuiBtn from '../../components/WeuiBtn'

import classnames from 'classnames'

const WeuiMsg = ({ type, title, content, tips }) => {
  return (
    <div className="weui-msg">
      <div className="weui-msg__icon-area">
        <i className={classnames('weui-icon_msg', `weui-icon-${type}`)} />
      </div>
      <div className="weui-msg__text-area">
        <h2 className="weui-msg__title">{title}</h2>
        <p className="weui-msg__desc">{content}</p>
      </div>
      <div className="weui-msg__opr-area">
        <WeuiBtn type="primary" label="推荐操作" />
      </div>
      <div className="weui-msg__tips-area">
        <p className="weui-msg__tips">{tips}</p>
      </div>
      <div className="weui-msg__extra-area" />
    </div>
  )
}
export default WeuiMsg
