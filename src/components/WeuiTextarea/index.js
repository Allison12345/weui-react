import React, { Fragment } from 'react'

const WeuiTextarea = props => {
  return (
    <Fragment>
      <textarea className="weui-textarea" />
      <div className="weui-textarea-counter">
        <span>{`${props.textareaStr.length}/${props.limit}`}</span>
      </div>
    </Fragment>
  )
}
export default WeuiTextarea
