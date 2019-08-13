import React from 'react'

import Page from '../../components/Page'

import { navbar } from '../../utils/dialog'
import WeuiNavbar from '../../components/WeuiNavbar'

const items = ['选项一', '选项二', '选项三']

const click = index => {
  navbar({ index: index })
  console.log(index)
}
const Navbar = () => {
  return (
    <Page>
      <div className="weui-tab">
        <WeuiNavbar items={items} onClick={click} />
      </div>
    </Page>
  )
}
export default Navbar
