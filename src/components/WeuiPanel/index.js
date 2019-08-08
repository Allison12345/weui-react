import React, { Fragment } from 'react'

import classnames from 'classnames'
import WeuiCell from '../WeuiCell'

const WeuiPanel = ({
  access,
  hd,
  type,
  media,
  MeTitle,
  MeDesc,
  title,
  desc,
  children,
  ft
}) => {
  return (
    <div className={classnames('weui-panel ', { 'weui-panel_access': access })}>
      <div className="weui-panel__hd">{hd}</div>
      <div className="weui-panel__bd">
        <div className={classnames('weui-media-box', `weui-media-box_${type}`)}>
          {media && (
            <Fragment>
              <div className="weui-media-box__hd">
                <img
                  className="weui-media-box__thumb"
                  src={require('../../assets/imgs/weui-panel.png')}
                  alt="img"
                />
              </div>
              <div className="weui-media-box__bd">
                <h4 className="weui-media-box__title">{MeTitle}</h4>
                <p className="weui-media-box__desc">{MeDesc}</p>
              </div>
            </Fragment>
          )}
          {title && <h4 className="weui-media-box__title">{title}</h4>}
          {desc && <p className="weui-media-box__desc">{desc}</p>}
          {children}
        </div>
      </div>
      {ft && (
        <div className="weui-panel__ft">
          <WeuiCell type="access" Link bd="查看更多" ft={() => <span />} />
        </div>
      )}
    </div>
  )
}
export default WeuiPanel
