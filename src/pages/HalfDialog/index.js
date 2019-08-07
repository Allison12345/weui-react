import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'
import { halfComfirm } from '../../utils/dialog'

const onCancel = () => {
  console.log('辅助操作')
}
const onComfirm = () => {
  console.log('主操作')
}
const HalfDialog = () => {
  return (
    <Page title="Half-screen Dialog" desc="半屏组件" spacing>
      <WeuiBtn
        label="样式一"
        btnDefault
        onClick={() =>
          halfComfirm({
            title: '标题',
            content: '辅助描述内容',
            onCancel,
            onComfirm
          })
        }
      />
      <WeuiBtn
        label="样式二"
        btnDefault
        onClick={() =>
          halfComfirm({
            title: '标题',
            content: '辅助描述内容',
            tips: '辅助提示内容',
            onCancel,
            onComfirm
          })
        }
      />
    </Page>
  )
}
export default HalfDialog
