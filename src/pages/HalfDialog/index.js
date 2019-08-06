import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'

const HalfDialog = () => {
  return (
    <Page title="Half-screen Dialog" desc="半屏组件" spacing>
      <WeuiBtn label="样式一" btnDefault />
      <WeuiBtn label="样式二" btnDefault />
    </Page>
  )
}
export default HalfDialog
