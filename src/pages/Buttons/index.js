import React from 'react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'

const Buttons = () => {
  return (
    <Page title="Button" desc="按钮" spacing>
      <div className="button-sp-area">
        <WeuiBtn type="primary" label="页面主操作" />
        <WeuiBtn type="primary" loading isLoading label="页面主操作" />
        <WeuiBtn type="disabled" primary label="页面主操作" />
        <WeuiBtn type="default" label="页面次要操作" />
        <WeuiBtn type="default" loading isLoading label="页面次要操作" />
        <WeuiBtn type="disabled" default label="页面次要操作" />
        <WeuiBtn type="warn" label="警告类操作" />
        <WeuiBtn type="warn" loading isLoading label="警告类操作" />
        <WeuiBtn type="disabled" warn label="警告类操作" />
      </div>
      <div className="button-sp-area">
        <WeuiBtn type="block" primary label="页面主操作" />
        <WeuiBtn type="block" default label="页面次要操作" />
        <WeuiBtn type="block" warn label="警告类操作" />
      </div>
      <div className="button-sp-area">
        <WeuiBtn type="cell" cellType="default" label="页面主操作" />
        <WeuiBtn type="cell" cellType="primary" label="页面次要操作" />
        <WeuiBtn
          type="cell"
          cellType="primary"
          loading
          isLoading
          label="页面次要操作"
        />
        <WeuiBtn type="cell" cellType="warn" label="警告类操作" />
      </div>
      <div className="button-sp-area cell">
        <WeuiBtn type="plain-default" label="按钮" />
        <WeuiBtn type="plain-default" plainDis label="按钮" />
        <WeuiBtn type="plain-primary" label="按钮" />
        <WeuiBtn type="plain-primary" plainDis label="按钮" />
        <WeuiBtn type="mini" primary label="按钮" />
        <WeuiBtn type="mini" default label="按钮" />
        <WeuiBtn type="mini" warn label="按钮" />
      </div>
    </Page>
  )
}
export default Buttons
