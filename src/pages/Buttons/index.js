import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'

const Buttons = () => {
  return (
    <Page title="Button" desc="按钮" spacing>
      <div className="button-sp-area">
        <WeuiBtn type="primary" />
      </div>
    </Page>
  )
}
export default Buttons
