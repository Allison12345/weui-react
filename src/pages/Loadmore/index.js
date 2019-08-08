import React from 'react'

import Page from '../../components/Page'

const Loadmore = () => {
  return (
    <Page title="Loadmore" desc="加载更多">
      <div className="weui-loadmore">
        <i className="weui-loading" />
        <span className="weui-loadmore__tips">正在加载</span>
      </div>
      <div className="weui-loadmore weui-loadmore_line">
        <span className="weui-loadmore__tips">暂无数据</span>
      </div>
      <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
        <span className="weui-loadmore__tips" />
      </div>
    </Page>
  )
}
export default Loadmore
