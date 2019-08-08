import React from 'react'

import Page from '../../components/Page'
import WeuiPanel from '../../components/WeuiPanel'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiMediaBoxInfo from '../../components/WeuiMediaBoxInfo'

const Panel = () => {
  return (
    <Page title="Panel" desc="面板">
      <WeuiPanel
        access
        media
        hd="图文组合列表"
        type="appmsg"
        MeTitle="标题一"
        MeDesc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
        ft
      />
      <WeuiPanel
        access
        hd="文字组合列表"
        type="text"
        title="标题一"
        desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
        ft
      />
      <WeuiPanel hd="小图文组合列表" type='small-appmsg"'>
        <WeuiCells>
          <WeuiCell
            type="access"
            example
            hd={() => (
              <img
                src={require('../../assets/imgs/weui-littlePanel.png')}
                alt="img"
              />
            )}
            bd={() => <p>文字标题</p>}
          />
        </WeuiCells>
      </WeuiPanel>
      <WeuiPanel
        hd="文字列表附来源"
        title="标题一"
        desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
      >
        <WeuiMediaBoxInfo source="文字来源" time="时间" info="其它信息" />
      </WeuiPanel>
    </Page>
  )
}
export default Panel
