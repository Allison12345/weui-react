import React from 'react'

const WeuiFromPreview = ({ label, value }) => {
  return (
    <div className="weui-form-preview__item">
      <label className="weui-form-preview__label">{label}</label>
      <em className="weui-form-preview__value">{value}</em>
    </div>
  )
}
export default WeuiFromPreview
