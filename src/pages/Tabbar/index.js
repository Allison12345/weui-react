import React from 'react'

import Page from '../../components/Page'
import WeuiTabbar from '../../components/WeuiTabbar'

import { items } from './config'

const Tabbar = () => {
  return (
    <Page bdStyle={{ height: '100%' }}>
      <div className="weui-tab">
        <div className="weui-tab__panel" />
        <WeuiTabbar items={items} />
      </div>
    </Page>
  )
}
export default Tabbar
