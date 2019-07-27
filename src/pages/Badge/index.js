import React, { Fragment } from 'react'

import Page from '../../components/Page'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiBadge from '../../components/WeuiBadge'

const Badge = () => {
  return (
    <Page title="Badge" desc="徽章">
      <WeuiCells title="新消息提示跟摘要信息后，统一在列表右侧" />
      <WeuiCells>
        <WeuiCell
          type="access"
          bd="单行列表"
          ft={() => <WeuiBadge dot label="详细信息" />}
        />
      </WeuiCells>
      <WeuiCells>
        <WeuiCell
          hdStyle={{ position: 'relative', marginRight: '10px' }}
          hd={() => (
            <Fragment>
              <img
                src={require('../../assets/imgs/weui-littlePanel.png')}
                alt="1"
              />
              <WeuiBadge
                number="8"
                style={{ position: 'absolute', top: '-.4em', right: '-.4em' }}
              />
            </Fragment>
          )}
          bd={() => (
            <Fragment>
              <p>联系人名称</p>
              <p style={{ fontSize: ' 13px', color: '#888888' }}>摘要信息</p>
            </Fragment>
          )}
        />
      </WeuiCells>
    </Page>
  )
}
export default Badge
