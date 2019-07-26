import React from 'react'

import Page from '../../components/Page'
import WeuiCells from '../../components/WeuiCells'
import WeuiCell from '../../components/WeuiCell'
import WeuiTextarea from '../../components/WeuiTextarea'
import WeuiSelect from '../../components/WeuiSelect'

const Input = () => {
  return (
    <Page title="Input" desc="表单输入">
      <WeuiCells title="单选列表项" />
      <WeuiCells type="radio">
        <WeuiCell
          isLabel
          bd="cell standard"
          ft={() => <span className="weui-icon-checked" />}
        />
      </WeuiCells>
      <WeuiCell type="link" bd="添加更多" />
      <WeuiCells title="复选列表项" />
      <WeuiCells type="checkbox">
        <WeuiCell
          isLabel
          hd={() => <i className="weui-icon-checked" />}
          bd="standard is dealt for u."
        />
      </WeuiCells>
      <WeuiCell type="link" bd="添加更多" />
      <WeuiCells title="表单" />
      <WeuiCells type="form">
        <WeuiCell
          hd={() => <label className="weui-label">qq</label>}
          bd={() => (
            <input
              className="weui-input"
              pattern="[0-9]*"
              type="number"
              placeholder="请输入qq号"
            />
          )}
        />
        <WeuiCell
          type="v-code"
          hd={() => <label className="weui-label">手机号</label>}
          bd={() => (
            <input
              className="weui-input"
              type="tel"
              placeholder="请输入手机号"
            />
          )}
        />
        <WeuiCell
          hd={() => <label className="weui-label">日期</label>}
          bd={() => <input className="weui-input" type="date" />}
        />
      </WeuiCells>
      <WeuiCell
        type="v-code"
        hd={() => <label className="weui-label">验证码</label>}
        bd={() => (
          <input
            className="weui-input"
            type="number"
            placeholder="请输入验证码"
          />
        )}
      />
      <WeuiCells type="tips">底部说明文字</WeuiCells>
      <WeuiCells title="表单报错" />
      <WeuiCells type="form">
        <WeuiCell
          type="warn"
          hd={() => <label className="weui-label">卡号</label>}
          bd={() => (
            <input
              className="weui-input"
              pattern="[0-9]*"
              type="number"
              placeholder="请输入卡号"
            />
          )}
          ft={() => <i className="weui-icon-warn" />}
        />
      </WeuiCells>
      <WeuiCells title="开关" />
      <WeuiCells type="form">
        <WeuiCell
          type="switch"
          bd="标题文字"
          ft={() => <input className="weui-switch" type="checkbox" />}
        />
      </WeuiCells>
      <WeuiCells title="开本框" />
      <WeuiCells>
        <WeuiCell bd={() => <input type="text" placeholder="请输入文本" />} />
      </WeuiCells>
      <WeuiCells title="文本域" />
      <WeuiCells type="form">
        <WeuiCell
          hd={() => (
            <WeuiTextarea
              rows="3"
              limit="10"
              textareaStr=""
              placeholder="请输入文本"
            />
          )}
        />
      </WeuiCells>
      <WeuiCells>
        <WeuiCell
          type="select"
          before
          hd={() => <WeuiSelect />}
          bd={() => (
            <input
              className="weui-input"
              type="number"
              pattern="[0-9]*"
              placeholder="请输入号码"
            />
          )}
        />
      </WeuiCells>
      <WeuiCells title="选择" />
    </Page>
  )
}

export default Input
