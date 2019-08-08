import React, { Fragment } from 'react'
import WeuiFromPreview from '../WeuiFromPreview'

const WeuiPreview = ({ label, value, list, onClick }) => {
  return (
    <Fragment>
      <div className="weui-form-preview">
        <div className="weui-form-preview__hd">
          <WeuiFromPreview label={label} value={value} />
        </div>
        <div className="weui-form-preview__bd">
          {list.map((item, index) => (
            <WeuiFromPreview {...item} key={index} />
          ))}
        </div>

        <div className="weui-form-preview__ft">
          <button
            className="weui-form-preview__btn weui-form-preview__btn_primary"
            onClick={onClick}
          >
            删除
          </button>
        </div>
      </div>
      <br />
    </Fragment>
  )
}
export default WeuiPreview
