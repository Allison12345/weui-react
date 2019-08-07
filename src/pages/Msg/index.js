import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'

const Msg = () => {
  return (
    <Page title="Msg" desc="提示页" spacing>
      <WeuiBtn btnDefault label="成功提示页" />
      <WeuiBtn btnDefault label="失败提示页" />
      <WeuiBtn btnDefault label="无图标提示页" />
      <WeuiBtn btnDefault label="无图标提示页" />
    </Page>
  )
}
export default Msg
