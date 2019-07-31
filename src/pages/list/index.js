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
      <WeuiCells title="带图标、说明的列表项" />
      <WeuiCells>
        <WeuiCell
          type="example"
          hd={() => (
            <img
              src={require('../../assets/imgs/weui-littlePanel.png')}
              alt=""
              style={{ width: '20px', marginRight: '16px', display: 'block' }}
            />
          )}
          bd="标题文字"
          ft="说明文字"
        />
      </WeuiCells>
      <WeuiCells title="带跳转的列表项" />
      <WeuiCells>
        <WeuiCell type="access" bd="cell standard" ft />
      </WeuiCells>
      <WeuiCells title="带说明、跳转的列表项" />
      <WeuiCells>
        <WeuiCell type="access" bd="cell standard" ft="说明文字" />
      </WeuiCells>
      <WeuiCells title="带图标、说明、跳转的列表项" />
      <WeuiCells>
        <WeuiCell
          type="access"
          example
          hd={() => (
            <img
              src={require('../../assets/imgs/weui-littlePanel.png')}
              alt=""
              style={{ width: '20px', marginRight: '16px', display: 'block' }}
            />
          )}
          bd="标题文字"
          ft="说明文字"
        />
      </WeuiCells>
    </Page>
  )
}
export default List
