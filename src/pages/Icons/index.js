import React from 'react'

import Page from '../../components/Page'
import WeuiIcon from '../../components/WeuiIcon'
import WeuiIconSp from '../../components/WeuiIconSp'

import { items, spItems } from './config'

const Icons = () => {
  return (
    <Page title="Icons" desc="图标" spacing>
      {items.map((item, index) => (
        <WeuiIcon key={index} {...item} />
      ))}
      <div className="icon_sp_area">
        {spItems.map((item, index) => (
          <WeuiIconSp icon={item} key={index} />
        ))}
      </div>
    </Page>
  )
}
export default Icons
