import React from 'react'

const WeuiSelect = ({ items, onChange }) => {
  return (
    <select className="weui-select" onChange={onChange}>
      {items.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  )
}
export default WeuiSelect
