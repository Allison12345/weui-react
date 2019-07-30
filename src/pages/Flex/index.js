import React from 'react'

import Page from '../../components/Page'
import WeuiFlex from '../../components/WeuiFlex'
import WeuiFlexItem from '../../components/WeuiFlexItem'

const Flex = () => {
  return (
    <Page title="Flex" desc="Flex布局" spacing>
      {Array(4)
        .fill(0)
        .map((item, i) => (
          <WeuiFlex {...item} key={i}>
            {Array(i + 1)
              .fill(0)
              .map((item, index) => (
                <WeuiFlexItem {...item} key={index} />
              ))}
          </WeuiFlex>
        ))}
      <WeuiFlex>
        <div className="placeholder">weui</div>
        <WeuiFlexItem />
        <div className="placeholder">weui</div>
      </WeuiFlex>
    </Page>
  )
}
export default Flex
