import React, { useState } from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'
import WeuiActionSheet from '../../components/WeuiActionSheet'

const actionSheetItems = ['示例菜单1', '示例菜单2', '示例菜单3', '示例菜单4']

const ActionSheet = () => {
  const [show, setShow] = useState(false)
  const comfrim = item => {
    console.log(item)
  }
  return (
    <Page title="ActionSheet" desc="弹出式菜单" spacing>
      <WeuiBtn
        btnDefault
        label="iOS ActionSheet"
        onClick={() => {
          setShow(true)
        }}
      />
      <WeuiBtn btnDefault label="Android ActionSheet" />
      {show && (
        <WeuiActionSheet
          hide={() => setShow(false)}
          onComfrim={comfrim}
          items={actionSheetItems}
        />
      )}
    </Page>
  )
}
export default ActionSheet
