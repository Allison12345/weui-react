import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'
import { comfirm } from '../../utils/dialog'

const onCancel = () => {
  console.log('cancel')
}
const onComfirm = () => {
  console.log('comfirm')
}

const Dialog = () => {
  return (
    <Page title="Dialog" desc="对话框" spacing>
      <WeuiBtn
        label="iOS Dialog样式一"
        btnDefault
        onClick={() =>
          comfirm({ title: '标题', content: '内容', onCancel, onComfirm })
        }
      />
      <WeuiBtn
        label="iOS Dialog样式二"
        btnDefault
        onClick={() => comfirm({ content: '内容', onComfirm })}
      />
    </Page>
  )
}
export default Dialog
