import React from 'react'

import Page from '../../components/Page'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiSwiped from '../../components/WeuiSwiped'

const List = () => {
  return (
    <Page title="List" desc="列表">
      <WeuiCells title="带说明的列表项" />
      <WeuiCells>
        <WeuiCell bd="标题文字" ft="说明文字" />
        <WeuiSwiped />
      </WeuiCells>
    </Page>
  )
}
export default List
