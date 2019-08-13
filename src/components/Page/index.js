import './style.css'

import React from 'react'
import classnames from 'classnames'

import { renderProp } from '../../utils/render'

const Page = ({ ft, title, desc, spacing, children, bdStyle }) => {
  return (
    <div className="page">
      {title && (
        <div className="page__hd">
          <h1 className="page__title">{renderProp(title)}</h1>
          <p className="page__desc">{desc}</p>
        </div>
      )}
      <div
        className={classnames('page__bd', { page__bd_spacing: spacing })}
        style={bdStyle}
      >
        {children}
      </div>
      {ft && <div className="page__ft">{renderProp(ft)}</div>}
    </div>
  )
}
export default Page
