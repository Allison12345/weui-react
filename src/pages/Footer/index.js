import React, { Fragment } from 'react'

import Page from '../../components/Page'
import WeuiFooter from '../../components/WeuiFooter'

const Footer = () => {
  return (
    <Page title="Footer" desc="页脚" spacing>
      <Fragment>
        <WeuiFooter text="Copyright © 2008-2016 weui.io" />
        <WeuiFooter link="底部链接" text="Copyright © 2008-2016 weui.io" />
        <WeuiFooter link="底部链接" two text="Copyright © 2008-2016 weui.io" />
      </Fragment>
    </Page>
  )
}
export default Footer
