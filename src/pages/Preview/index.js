import React from 'react'

import Page from '../../components/Page'
import WeuiPreview from '../../components/WeuiPreview'

import './config'
import { items } from './config'

const Preview = () => {
  return (
    <Page title="Preview" desc="表单预览">
      {items.map((item, index) => (
        <WeuiPreview {...item} key={index} />
      ))}
    </Page>
  )
}
export default Preview
